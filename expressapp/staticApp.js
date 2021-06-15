//* Переадресация по относительным путям
const express = require('express');
const app = express();

app.use('/home', (request, response) => {
    response.redirect('about')
});
//В данном случае будет идти перенаправление с ресурса "/home" на ресурс "/about", 
//то есть, условно говоря, с http://localhost:3000/home на http://localhost:3000/about.
app.use('/about', (request, response) => {
    response.send('<h1>About</h1>');
});
app.listen(3000, () => { console.log('server run'); })

// //*Перепдресация по абсолютному пути
// const { response } = require('express');
// const express = require('express');
// const app = express();

// app.use('/index', function(request, response) {
//     response.redirect('https://metanit.com') //В данном случае при обращении по пути "/index" будет идти переадресация на сайт https://metanit.com.
// });

// app.listen(3000, () => { console.log('sever run') });


// //* Маршрутизация
// const express = require('express');
// const app = express();

// //обработка запроса по адресу /about
// app.get('/about', function(request, response) {
//     response.send('<h1>О сайте</h1>');
// });

// //обработка запроса по адресу /contact
// app.use('/contact', (request, response) => {
//     response.send('<h1>Контакт</h1>');
// });

// //обработка запроса по корню сатйа
// app.get('/', (request, response) => {
//     response.send('<h1>Главная страница</h1>');
// });

// app.listen(3000, () => { console.log('server run'); });


// //* Статические файлы
// const express = require('express');
// const app = express();

// //Чтобы встроить компонент express.static в процесс обработки запроса, 
// //вызывается функция app.use(). Эта функция позволяет добавлять различные компоненты, 
// //которые еще называются middleware, в конвейер обработки запроса:
// app.use('/static', express.static(__dirname + '/public'));
// //Следует отметить, что для обращения к файлу мы указываем только имя файла без названия каталога public
// // Теперь чтобы обратиться к файлу about.html, необходимо отправить запрос http://localhost:3000/static/about.html.

// app.use('/', (request, response) => {

//     response.send('<h1>Главная страница</h1>');
// });

// app.listen(3000, () => { console.log('server run'); });