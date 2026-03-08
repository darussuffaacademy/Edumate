import * as fs from 'fs';

const content = fs.readFileSync('src/data/plusone_accountancy_unit7.ts', 'utf-8');

const coreEnMatch = content.match(/core: \{\s*en: `([\s\S]*?)`,\s*ml: `([\s\S]*?)`\s*\}/);

if (coreEnMatch) {
  const enLines = coreEnMatch[1].split('\n');
  const mlLines = coreEnMatch[2].split('\n');

  let interleaved = '';
  const maxLines = Math.max(enLines.length, mlLines.length);

  for (let i = 0; i < maxLines; i++) {
    const enLine = enLines[i] !== undefined ? enLines[i] : '';
    const mlLine = mlLines[i] !== undefined ? mlLines[i] : '';

    if (enLine.trim() === '' && mlLine.trim() === '') {
      interleaved += '\n';
      continue;
    }

    if (enLine.trim() !== '') {
      interleaved += enLine + '\n';
    }
    if (mlLine.trim() !== '' && mlLine.trim() !== enLine.trim()) {
      interleaved += mlLine + '\n';
    }
  }

  const newCore = `core: {\n      en: \`${interleaved}\`,\n      ml: \`${interleaved}\`\n    }`;
  const newContent = content.replace(coreEnMatch[0], newCore);
  fs.writeFileSync('src/data/plusone_accountancy_unit7.ts', newContent);
  console.log('Interleaved successfully!');
} else {
  console.log('Could not find core block');
}
