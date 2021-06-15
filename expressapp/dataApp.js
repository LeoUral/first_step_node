//*POST-запросы и отправка формы
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//todo создадим парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false }); //! устаревшая функция

app.get('/register', urlencodedParser, (request, response) => {
    response.sendFile(__dirname + '/register.html');
});
app.post('/register', urlencodedParser, (request, response) => {
    if (request.body) return response.sendStatus(400);
    console.log(request.body);;
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get('/', (request, response) => {
    response.send('<h1>Главная страница</h1>');
});
app.listen(3000, () => { console.log('server run'); });



// //* Передача данных приложению
// const express = require('express');
// const app = express();

// app.get('/', (request, response) => {
//     response.send('<h1>Главная страница</h1>');
// });

// app.use('/about', (request, response) => {

//     let id = request.query.id;
//     let userName = request.query.name;
//     response.send('<h1>Information</h1><p>id=' + id + '</p><p>name=' + userName + '</p>');
// });
// app.listen(3000, () => { console.log('server run') });