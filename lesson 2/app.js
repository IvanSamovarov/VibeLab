const fs = require('fs')

fs.readFile('./file.txt', 'utf8', (error, content) => {
    if (error) {
        console.error(error);
    } else {
        console.log(content);
    }
})

console.log('Файл прочитан')