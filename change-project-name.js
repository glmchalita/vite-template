// change-project-name.js

const fs = require('fs');
const path = require('path');

const newProjectName = process.argv[2];

if (!newProjectName) {
  console.error('Please provide a new project name.');
  process.exit(1);
}

const packageJsonPath = path.join(__dirname, 'path-to-your-package-json', 'package.json');

try {
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
  const updatedPackageJson = packageJsonContent.replace(/"name": "old-project-name"/, `"name": "${newProjectName}"`);

  fs.writeFileSync(packageJsonPath, updatedPackageJson);

  console.log(`Project name updated to ${newProjectName} in package.json.`);
} catch (error) {
  console.error('Error updating package.json:', error.message);
}
