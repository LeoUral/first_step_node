//* Pipe - канал который связывает потоки для чтения и записи. Используем архивацию
const fs = require('fs');
const zlib = require('zlib');

let readableStrem = fs.createReadStream('hello-new.txt', 'utf8');
let writeableStream = fs.createWriteStream('hello-new.gz');
let gzip = zlib.createGzip();

readableStrem.pipe(gzip).pipe(writeableStream); //Для архивации подключается модуль zlib. Каждый метод pipe() в цепочке вызовов возвращает поток для чтения, к которому опять же можно применить метод pipe() для записи в другой поток. (читаем - архивируем - записываем)



// //* Pipe - канал который связывает потоки для чтения и записи
// const fs = require('fs');

// let writeableStream = fs.createWriteStream('some-2.txt');
// let readableStrem = fs.createReadStream('hello-new.txt', 'utf8');

// readableStrem.pipe(writeableStream); //У потока чтения вызывается метод pipe(), в который передается поток для записи.

//! или ниже вариант
// const fs = require('fs');

// let readebleStreaam = fs.createReadStream('hello-new.txt', 'utf8');
// let writeableStream = fs.createWriteStream('some.txt');

// readebleStreaam.on('data', (chunk) => {
//     writeableStream.write(chunk);
// });


// //* Stream потоки данных
// const fs = require('fs');

// let writeableStream = fs.createWriteStream('hello-new.txt');
// writeableStream.write('Hello! WORLD...');
// writeableStream.write('bla bla bla bla \n');
// writeableStream.end('END write');

// let readableStrem = fs.createReadStream('hello-new.txt', 'utf8');

// readableStrem.on('data', (chunk) => {
//     console.log(chunk);
// });


// //* Наследование от EventEmitter
// const EventEmitter = require('events');

// let eventName = 'greet';

// class User extends EventEmitter {
//     sayHi(data) {
//         this.emit(eventName, data);
//     }
// }

// let user = new User();
// //добавляем к объекту user обработку события 'greet'
// user.on(eventName, function(data) {
//     console.log(data);
// });

// user.sayHi('Мне нужна твоя одежда...');


//! или вариант ниже

// const util = require('util');
// const EventEmitter = require('events');

// function User() {
// }

// util.inherits(User, EventEmitter);

// let eventName = 'greet';
// User.prototype.sayHi = function(data) {
//     this.emit(eventName, data);
// }
// let user = new User();
// //добавляем к объекту user обработку события 'greet'
// user.on(eventName, function(data) {
//     console.log(data);
// });

// user.sayHi('Мне нужна твоя одежда...');

//************************************************************* */

// //* Работа с Событиями, передача параметров событию
// const Emitter = require('events');
// let emitter = new Emitter();

// let eventName = 'greet';
// //можно в качестве второго параметра передать функцию
// emitter.on(eventName, function(data) {
//     console.log(data);
// });

// emitter.emit(eventName, 'Привет мир!');


// //* Работа с Событиями
// const Emitter = require('events');
// let emitter = new Emitter();
// let eventName = 'greet';

// emitter.on(eventName, () => {
//     console.log('Hello all!');
// });

// emitter.on(eventName, () => {
//     console.log('HELLO !!!');
// });

// emitter.emit(eventName);




//* Создаем новый файл и его позже читаем. Можно прописать функции для дописывания файла и его удаления. См. www.metanin.com
// const http = require('http');
// const fs = require('fs');

// http.createServer(function(request, response) {

//     this.data = { "name": "Leopold", "content": "All!!! ALL, HELLOW!!! bla bla bla" };

//     fs.writeFile('hello-json.json', JSON.stringify(this.data), (error) => {
//         if (error) throw new Error('Ошибка! Хрень полная! Файл не записан!'); //если возникла ошбика
//         console.log('Асинхронная запись фала завершена');
//     });

//     setTimeout(() => {
//         fs.readFile('hello-json.json', 'utf8', (error, data) => {
//             try {
//                 console.log('Чтение записанного файла!!!');
//                 if (error) throw new Error('Ошибка чтения файла!');

//                 this.dataJ = JSON.parse(data);
//                 console.log(this.dataJ.name);
//                 response.end(this.dataJ.content);

//             } catch (error) {
//                 console.log(error);
//                 response.end('ERROR' + error.name);
//             }
//         });
//     }, 120);

// }).listen(3000, () => { console.log('SERVER RUN'); })




//* Пробное чтение из файла с созданием сервера и обработкой ошибок
// const fs = require('fs');
// const http = require('http');


// http.createServer(function(request, response) {

//     //асинхронное чтение
//     fs.readFile('hello-jsona.json', 'utf8',

//         function(error, data) {

//             //todo ловим возможную ошибку
//             try {
//                 console.log('Асинхронное чтение файла');
//                 if (error) throw new Error('Хрен пойми что!!!!!!!!!!!!'); //возникла ошибка, name - ошибки задается
//                 console.log(data.name + ' <data async'); //выводим считанные данные
//                 this.dataJson = JSON.parse(data);

//                 response.end(this.dataJson.name + ' > ' + this.dataJson.content);

//                 //todo обработка ошибки
//             } catch (error) {
//                 console.log('Ошибка: ');
//                 console.log('-> ' + error.name);
//                 console.log('--> ' + error.message);
//                 console.log(error);
//                 response.end('Sorry! error!')
//                 console.log('Ошбика, типа обработана ))))');
//             }
//         }

//     );


//     //синхронное чтение
//     console.log('Синхронное чтение файла');
//     let fileContent = fs.readFileSync('hello.txt', 'utf8');
//     console.log(fileContent);



// }).listen(3000, () => { console.log('server run'); })




//* предыдущий урок
// const http = require('http');

// let message = 'Hello World!!!';
// http.createServer(function(request, response) {
//     console.log(message);
//     response.end(message);

// }).listen(3000, "127.0.0.1", () => {
//     console.log('Сервер начал работу прослушивания запросов, порт 3000');
// });




//* Предыдущий урок
// const express = require('express'); //получаем модуль EXPRESS
// const app = express(); // создаем приложение

// let name = process.argv[2];
// let age = process.argv[3];

// console.log("name: " + name);
// console.log("age: " + age);

// app.get("/", function(request, response) { // устанавливаем обработчик для маршурта "/"
//     response.end('Hello from Express!');
// });

// // начинаем прослушивать подключение на 3000 порту
// app.listen(3000, () => {
//     console.log('SERVER RUN on port 3000');
// })