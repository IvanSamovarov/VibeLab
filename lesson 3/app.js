const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//Этот код создает простой веб-сервер, который обрабатывает GET-запросы, возвращая ответ "Hello World".
// Node.js обработает большое количество таких запросов параллельно благодаря своей асинхронной модели выполнения.