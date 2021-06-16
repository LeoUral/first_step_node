//* JSON - AJAX запросы

const express = require('express');
const app = express();

//создадим парсер для данных в json
const jsonParser = express.json();

app.post('/user', jsonParser, (req, res) => {
    console.log(req.body);
    if (!req.body) return res.sendStatus(400);

    res.json(req.body); //отправляем пришедшийц ответ обратно
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index_json.html');
});
app.listen(3000, () => { console.log('server run'); });