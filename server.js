const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let messages = [];

app.post('/messages', (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
        messages.push({ name, message });
        res.status(200).send({ status: 'Message received' });
    } else {
        res.status(400).send({ error: 'Name and message required' });
    }
});

app.get('/messages', (req, res) => {
    res.status(200).json(messages);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
