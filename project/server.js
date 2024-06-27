const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/page1', (req, res) => {
    res.send('<h1>Страница 1</h1>');
});

app.get('/page2', (req, res) => {
    res.send('<h1>Страница 2</h1>');
});
app.listen(port, () => {
    console.log("Сервер запущен");
});