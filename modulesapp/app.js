// const express = require('express'); //получаем модуль EXPRESS
// const app = express(); // создаем приложение

let name = process.argv[2];
let age = process.argv[3];

console.log("name: " + name);
console.log("age: " + age);

// app.get("/", function(request, response) { // устанавливаем обработчик для маршурта "/"
//     response.end('Hello from Express!');
// });

// // начинаем прослушивать подключение на 3000 порту
// app.listen(3000, () => {
//     console.log('SERVER RUN on port 3000');
// })