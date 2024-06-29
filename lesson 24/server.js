const express = require('express');
const app = express();
const { pool } = require('./config');

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM users');
        res.json(results.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching users');
    }
});

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('User not found');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching user');
    }
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user');
    }
});

app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    try {
        const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
        if (result.rows.length === 0) {
            return res.status(404).send('User not found');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating user');
    }
});

app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('User not found');
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting user');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});