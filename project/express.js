const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});

const logRequest = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Необходимо авторизоваться' });
    }
    next();
};

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Произошла ошибка' });
};

app.use(logRequest);

app.get('/protected', authenticate, (req, res) => {
    res.send('Защищенный ресурс');
});

app.use(errorHandler);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/page1', (req, res) => {
    res.send('<h1>Страница 1</h1>');
});

app.get('/page2', (req, res) => {
    res.send('<h1>Страница 2</h1>');
});