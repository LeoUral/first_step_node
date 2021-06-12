//* Переадресация предполагает отправку статусного кода 301 (постоянная переадресация) или 302 (временная переадресация) и заголовка Location
const http = require('http');

http.createServer(function(request, response) {

    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (request.url === '/') {
        response.statusCode = 302; //временная переадресация
        //на localhost:3000/newpage
        response.setHeader('Location', '/newpage');
    } else if (request.url === '/newpage') {
        response.write('New adress');
    } else {
        response.statusCode = 404; // адрес не найден
        response.write('Not Found');
    }
    response.end();
}).listen(3000, () => { console.log('Server run'); });


// //*Маршрутизация без помощи Express, для простого обработки

// const http = require('http');

// http.createServer(function(request, response) {
//     response.setHeader('Content-Type', 'text/html; charset=utf-8');

//     if (request.url === '/hone' || request.url === '/') {
//         response.write('<h2>Home</h2>');
//     } else if (request.url === '/about') {
//         response.write('<h2>About</h2>');
//     } else if (request.url === '/contact') {
//         response.write('<h2>Contact</h2>');
//     } else {
//         response.write('<h2>404 Not Found</h2>');
//     }
//     response.end();
// }).listen(3000, () => { console.log('server RUN'); });



// //* Создагние сервера
// const http = require('http');

// // request - хранит информацию о запросе, response - управляет отправкой ответа
// http.createServer(function(request, response) {

//         // console.log('Url: ' + request.url);
//         // console.log('Тип запроса: ' + request.method);
//         // console.log('User-Agent: ' + request.headers["user-agent"]);
//         // console.log('Все заголовки');
//         // console.log(request.headers);


//         // response.setHeader('UserId', 12);
//         response.setHeader('Content-Type', 'text/html; charset=utf-8');
//         response.write("<!DOCTYPE html>");
//         response.write("<html>");
//         response.write("<head>");
//         response.write("<title>Hello Node.js</title>");
//         response.write("<meta charset=\"utf-8\" />");
//         response.write("</head>");
//         response.write("<body>");
//         response.write("<h1>Привет миг</h1>");
//         response.write("<h2>Привет! Учим Node.js </h2>");
//         response.write("<div> Изучаем написание сервера на NODE.JS </div>")
//         response.write("</body>");
//         response.write("</html>");
//         // response.end('Hello! WORLD');
//         response.end();
//     }

// ).listen(3000, () => { console.log('RUN Server'); });