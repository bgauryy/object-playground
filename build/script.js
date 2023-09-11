const fs = require('fs');
const path = require('path');

fs.mkdir('./dist', () => { });

const files = getAllScriptFilesPaths('./src/scripts');

for (const filePath of files) {
    const file = filePath.split('/').reverse()[0].replace('.js', '');
    const folderPath = `./dist/${file}`;

    fs.mkdir(folderPath, () => { });
    fs.copyFile('./template/example/index.html', `${folderPath}/index.html`, (err) => { });
    fs.copyFile('./template/example/style.css', `${folderPath}/style.css`, (err) => { });
    fs.copyFile('./template/example/controller.js', `${folderPath}/controller.js`, (err) => { });
    fs.copyFile(filePath, `${folderPath}/script.js`, (err) => { });
}

fs.copyFile('./template/html/index.html', `./dist/index.html`, (err) => { });
fs.copyFile('./template/html/style.css', `./dist/style.css`, (err) => { });

function getAllScriptFilesPaths(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    return files.map(file => {
        return path.join(directoryPath, file);
    });
}