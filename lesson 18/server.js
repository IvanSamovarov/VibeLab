const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Received a request!');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});