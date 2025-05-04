// thanks claude
const { ESLint } = require('eslint');
const prettier = require('prettier');
const fs = require('fs');
const path = require('path');

const scriptDirectory = __dirname;
const filesToLint = [
  path.join(scriptDirectory, './game/js/Cfunction.js'),
  path.join(scriptDirectory, './game/js/CPlants.js'),
  path.join(scriptDirectory, './game/js/CZombie.js')
];

async function lintFiles() {
  const eslint = new ESLint({ fix: true });
  console.log('Starting ESLint...');
  try {
    const results = await eslint.lintFiles(filesToLint);
    await ESLint.outputFixes(results);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);
    console.log(resultText);

    const errorCount = results.reduce((acc, result) => acc + result.errorCount, 0);
    const warningCount = results.reduce((acc, result) => acc + result.warningCount, 0);
    console.log(`ESLint complete: ${errorCount} errors, ${warningCount} warnings`);
  } catch (error) {
    console.error('ESLint error:', error);
  }

  console.log('\nStarting Prettier...');
  for (const file of filesToLint) {
    try {
      const fileContent = fs.readFileSync(file, 'utf8');
      const prettierOptions = await prettier.resolveConfig(file);
      const formatted = await prettier.format(fileContent, {
        ...prettierOptions,
        filepath: file
      });

      if (formatted !== fileContent) {
        fs.writeFileSync(file, formatted, 'utf8');
        console.log(`Formatted: ${path.basename(file)}`);
      } else {
        console.log(`No changes needed: ${path.basename(file)}`);
      }
    } catch (error) {
      console.error(`Error formatting ${file}:`, error);
    }
  }

  console.log('\nLinting and formatting complete!');
}

lintFiles();