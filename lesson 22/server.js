
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Подключение к MongoDB установлено'))
    .catch(err => console.error('Ошибка подключения к MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});