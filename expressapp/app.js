//* Middleware помогают выполнять некоторые задачи, которые должны быть сделаны до отправки ответа
const express = require('express');
const fs = require('fs');

const app = express();

app.use(function(request, response, next) {

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get('user-agent')}`;
    console.log(data);
    //Здесь с помощью объекта request получаем различную информацию о запросе и добавляем ее в файл server.log, используя модуль fs.
    fs.appendFile('server.log', data + '\n', function() {});
    next();
});

app.get('/', function(request, response) {
    response.send('Hello');
});
app.listen(3000, () => { console.log('Run Server'); });



// //* При необходимости мы можем встроить в конвейер обработки запроса на любом этапе любую функцию middleware. Для этого применяется метод app.use()
// const express = require('express');

// const app = express();

// //request: данные запроса
// //response: объект для управления ответом
// //next: следующая в конвейере обработки функция
// app.use(function(request, response, next) {

//     console.log('Middleware 1');
//     next();
// });
// app.use('/about', function(request, response, next) {

//     console.log('Middleware 2');
//     response.send('Middleware 2')
// });

// app.get('/', (request, response) => {

//     console.log('Route /');
//     response.send('Hello');
// });
// app.listen(3000, () => { console.log('run server'); });



// //*подключение express
// const express = require('express');
// //создаем объект приложения
// const app = express();

// //определяем обработчик для маршрута "/"
// //первым параметром передается маршрут, а вторым - обработчик, который будет вызываться, 
// //если запрос к серверу соответствует данному маршруту
// app.get('/', function(request, response) {
//     //отправляем ответ
//     response.send('<h2>Привет Express!</h2>');
// });

// app.get('/about', (request, response) => {
//     response.send('<h2>О сайте</h2>');
// });

// app.get('/contact', (request, response) => {
//     response.send('<h2> Контакты </h2>');
// });


// // начинаем прослушивать подключение на 3000 порут
// app.listen(3000, () => { console.log('RUN server, port: 3000'); });