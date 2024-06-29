const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:3000/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB!');
        const userSchema = new mongoose.Schema({
            name: String,
            age: Number,
            email: String
        });
        const User = mongoose.model('User', userSchema);

        app.get('/users', (req, res) => {
            User.find()
                .then(users => {
                    res.send(users);
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).send('Error fetching data');
                });
        });

        app.post('/users', (req, res) => {
            const newUser = new User(req.body);
            newUser.save()
                .then(user => {
                    res.status(201).send(user);
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).send('Error saving data');
                });
        });

        app.get('/users/:id', (req, res) => {
            const userId = req.params.id;
            User.findById(userId)
                .then(user => {
                    if (user) {
                        res.send(user);
                    } else {
                        res.status(404).send('User not found');
                    }
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).send('Error fetching data');
                });
        });

        app.put('/users/:id', (req, res) => {
            const userId = req.params.id;
            User.findByIdAndUpdate(userId, req.body, { new: true })
                .then(user => {
                    if (user) {
                        res.send(user);
                    } else {
                        res.status(404).send('User not found');
                    }
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).send('Error updating data');
                });
        });

        app.delete('/users/:id', (req, res) => {
            const userId = req.params.id;
            User.findByIdAndDelete(userId)
                .then(user => {
                    if (user) {
                        res.send('User deleted');
                    } else {
                        res.status(404).send('User not found');
                    }
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).send('Error deleting data');
                });
        });

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });