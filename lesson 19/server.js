const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
    const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);
    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.statusCode = 404;
            res.end('404 Not Found');
            return;
        }
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    });
});

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});