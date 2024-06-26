const fs= require('fs');

fs.writeFileSync('file1.txt', 'Hello, world!');
console.log('file1 создан')
console.log(fs.readFileSync('file1.txt', 'utf8'));

fs.appendFileSync('file1.txt', 'Новый текст');
console.log('file1 обновлён!')
console.log(fs.readFileSync('file1.txt', 'utf8'));

fs.unlinkSync('file1.txt')
console.log('file1 удалён!')