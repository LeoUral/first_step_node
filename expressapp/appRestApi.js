//* REST API

const express = require('express');
const fs = require('fs');

const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));

const filePath = 'user.json';

//получаем данные со всего файла JSON
app.get('/api/users', function(req, res) {

    const content = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(content);
    res.send(users);
});

//получение одного пользователя по id
app.get('/api/users/:id', function(req, res) {

    const id = req.params.id; // получаем id    
    const content = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(content);
    let user = null;
    //находим в массиве пользователя по id
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            user = users[i];
            break;
        }
    }
    //отправляем пользователя
    if (user) {
        res.send(user);
    } else {
        res.status(404).send();
    }
});

// получение отправленных данных
app.post('/api/users', jsonParser, function(req, res) {

    if (!req.body) return res.sendStatus(400);

    const userName = req.body.name;
    const userAge = req.body.age;
    let user = { name: userName, age: userAge };

    let data = fs.readFileSync(filePath, 'utf8');
    let users = JSON.parse(data);

    //находим максимальный id
    const id = Math.max.apply(Math, users.map(function(o) { return o.id; }));
    //увеличиваем его на единицу
    user.id = id + 1;
    //добавляем пользователя в массив
    users.push(user);
    data = JSON.stringify(users);
    //перезаписываем файл с новыми данными
    fs.writeFileSync(filePath, data);
    res.send(user);
});

//удаление пользователя по id
app.delete('/api/users/:id', function(req, res) {

    const id = req.params.id;
    let data = fs.readFileSync(filePath, 'utf8');
    let users = JSON.parse(data);
    let index = -1;
    //находим индекс пользователя в массиве
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        //удаляем пользователя из массива по индексу
        const user = users.splice(index, 1)[0];
        data = JSON.stringify(users);
        fs.writeFileSync(filePath, data);
        //отправляем удаленного пользователя
        res.send(user);
    } else {
        res.status(404).send();
    }
});

//изменения пользователя
app.put('/api/users', jsonParser, function(req, res) {

    if (!req.body) return res.sendStatus(400);

    const userId = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;

    let data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);
    let user;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            user = users[i];
            users[i].name = userName;
            users[i].age = userAge;
            break;
        }
    }

    //изменяем данные у пользователя
    if (user) {
        user.age = userAge;
        user.name = userName;
        data = JSON.stringify(users);
        fs.writeFileSync(filePath, data);
        res.send(user);
    } else {
        res.status(400).send(user);
    }
});

app.listen(3000, () => {
    console.log('SERVER RUN on 3000 port...');
})