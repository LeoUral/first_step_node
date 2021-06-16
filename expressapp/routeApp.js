//*ROUTE
const express = require('express');
const app = express();

//определяем Router
const productRouter = express.Router();

//определяем маршруты и их обработку внутри роутра
productRouter.use('/create', (request, response) => {
    response.send('Добавление товара');
});
productRouter.use('/:id', (req, res) => {
    res.send(`Товар: ${req.params.id}`);
});
productRouter.use('/', (req, res) => {
    res.send('Список товаров');
});
//сопоставляем роутер с конечнолй точкой '/products'
app.use('/products', productRouter); // Здесь определен объект productRouter, который обрабатывает все запросы по маршруту "/products".

app.use('/aboute', (req, res) => {
    res.send('О сайте');
});
app.use('/', (req, res) => {
    res.send('Главная страница');
});
app.listen(3000, () => { console.log('RUN server'); });



//**Здесь у нас есть пять маршрутов, которые обрабатываются различными обработчиками. Но три из этих маршрутов начинаются с "/products" и условно относятся к некоторому функционалу по работе с товарами (просмотр списка товаров, просмотр одного товара по id и добавление товара). Объект Router позволяет связать подобный функционал в одно целое и упростить управление им. Например, перепишем предыдущий пример с использованием объекта Router: */

//* ROUTER
//*Router позволяет определить дочерние подмаршруты со своими обработчиками относительно
//* некоторого главного маршрута. Например, определим следующее приложение:

// const express = require('express');
// const app = express();

// app.use('/aboute', (request, response) => {
//     response.send('О Сайте');
// });

// app.use('/products/create', (request, response) => {
//     response.send('Добавление товара');
// });

// app.use('/products/:id', (request, response) => {
//     response.send(`Товар ${request.params.id}`);
// });
// app.use('/products/', (request, response) => {
//     response.send('Список товаров');
// });

// app.use('/', (request, response) => {
//     response.send('Главная страница');
// });

// app.listen(3000, () => { console.log('Server Run'); });



// //*Параметры маршрута
// const express = require('express');
// const app = express();

// app.get('/products/:productId', (request, response) => {
//     response.send('productId: ' + request.params['productId'])
// });
// app.get('/categories/:categoryId/products/:productId', (request, response) => {
//     let catId = request.params["categoryId"];
//     let prodId = request.params['productId'];
//     response.send(`Категория: ${catId} Товар: ${prodId}`);
// })

// app.listen(3000, () => { console.log('server run'); });