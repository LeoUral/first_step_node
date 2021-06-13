//* Шаблоны
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {

    const filePath = request.url.substr(1);
    fs.readFile(filePath, 'utf8', (errorr, data) => {

        let message = 'Изучаем Node.js';
        let header = 'Главная страница';
        data = data.replace('{header}', header).replace('{message}', message);
        response.end(data);
    });
}).listen(3000, () => { console.log('Server run'); });


// //*Второй способ передачи файла. Второй способ представляет чтение данных с помощью функции fs.readFile() и отправка с помощью метода response.end():
// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {

//     console.log(`Запрошенный адрес: ${req.url}`);
//     //получаем путь после слеша
//     const filePath = req.url.substr(1);
//     fs.readFile(filePath, (error, data) => {
//         if (error) {
//             res.statusCode = 404;
//             res.end('Resourse not found');
//         } else {
//             res.end(data);
//         }
//     });
// }).listen(3000, () => { console.log('Server run'); });



// //* Первый способ передачи файла. Для считывания файла может применяться метод fs.createReadStream(), 
//* который считывает файл в поток, и затем с помощью метода pipe() мы можем связать считанные файлы с потоком записи, то есть объектом response
// const http = require('http');
// const fs = require('fs');

// http.createServer((request, response) => {

//     console.log(`Запрошенный адрес: ${request.url}`);

//     //получаем путь после слеша
//     const filePath = request.url.substr(1);

//     //смотрим, есть ли такой файл
//     //Затем с помощью асинхронной функции fs.access проверяем доступность файла для чтения. 
//     //Первый параметр функции - путь к файлу. 
//     //Второй параметр - опция, относительно которой проверяется доступ.
//     // В данном случае значение fs.constants.R_OK говорит о том, что мы проверяем права на чтение из файла.
//     // Третий параметр функции - функция обратного вызова, которая получает объект ошибки.
//     // Если произошла ошибка (файл не досупен для чтения или вовсе не найден), посылаем статусный код 404.
//     fs.access(filePath, fs.constants.R_OK, err => {
//         //eсли произошла ошибка - отправляем статусный код 404
//         if (err) {
//             response.statusCode = 404;
//             response.end('Resours not found!');
//         } else {
//             fs.createReadStream(filePath).pipe(response);
//         }
//     });
// }).listen(3000, () => { console.log('server run'); });