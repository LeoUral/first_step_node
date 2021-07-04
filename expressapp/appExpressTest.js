const { response } = require('express');
const express = require('express');

let app = express();

app.get('/', (req, res) => {

    res.send('Hello Test');
})

app.get('/error', (req, res) => {
    res.status(404).send("NotFound");
});

app.get('/user', (req, res) => {
    res.send({ name: 'Tom', age: 22 });
});

app.listen(3000, () => { console.log('Server run'); });

module.exports.app = app;