const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());


// Get all users
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Create a new user
app.post('/api/users', (req, res) => {
    const { username, email, password } = req.body;
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(`User added with ID: ${results.insertId}`);
    });
});

// Additional routes for updating and deleting users
// Update user
app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    db.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, password, id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(`User with ID: ${id} updated`);
    });
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(`User with ID: ${id} deleted`);
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
