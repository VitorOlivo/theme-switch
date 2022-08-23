const { join } = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

const getFiles = dir => {
  const files = [];

  files.push(
    fs
      .readdirSync(dir)
      .filter(fn => fn.startsWith('main'))
      .map(fn => join(dir, fn))
  );

  return files.reduce((prev, curr) => [...prev, ...curr], []);
};

const obfuscate = file => {
  const data = fs.readFileSync(file, 'utf8');

  const obfuscationResult = JavaScriptObfuscator.obfuscate(data, {
    identifierNamesGenerator: 'mangled',
    compact: true,
    disableConsoleOutput: true,
    selfDefending: true,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75
  });

  const uglyCode = obfuscationResult.getObfuscatedCode();

  fs.writeFileSync(file, uglyCode);
};

const run = () => {
  try {
    const dirs = 'dist';

    const files = getFiles(dirs);

    files.forEach(file => {
      obfuscate(file);
    });
  } catch (err) {
    throw err;
  }
};

run();
