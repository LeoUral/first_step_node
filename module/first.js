const http = require("http");
const os = require('os'); // модуль окружения и операционной системы
const greeting = require('./greeting'); //нащ модуль, подключение    

http.createServer(function (request, response) {

    let userName = os.userInfo().username;
    console.log(userName + ' <<<<');

    response.end("Hello NodeJS! " + userName);

}).listen(3000, 'localhost', function () {
    console.log('SERVER RUN on port:3000');
});