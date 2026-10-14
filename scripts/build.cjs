const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src');
const manifest = JSON.parse(fs.readFileSync(path.join(source, 'manifest.json'), 'utf8'));
const check = process.argv.includes('--check');

function readSource(name) {
  const file = path.resolve(source, name);
  if (!file.startsWith(source + path.sep)) throw new Error('Ruta fuera de src: ' + name);
  return fs.readFileSync(file, 'utf8');
}

function expand(name, ancestors = []) {
  if (ancestors.includes(name)) throw new Error('Inclusión circular: ' + name);
  return readSource(name).replace(/<!-- include: ([^\r\n]+?) -->/g, (_, include) =>
    expand(include, [...ancestors, name]));
}

function output(name, content) {
  const file = path.resolve(root, name);
  if (!file.startsWith(root + path.sep)) throw new Error('Salida fuera del sitio: ' + name);
  if (check) {
    if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== content) {
      throw new Error('Archivo generado desactualizado: ' + name);
    }
  } else {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content, 'utf8');
  }
}

for (const page of manifest.pages) output(page.output, expand(page.template));
output(manifest.css.output, manifest.css.modules.map(readSource).join(''));
console.log(check ? 'HTML y CSS generados coinciden con sus módulos.' : 'HTML y CSS armados correctamente.');
