const http = require("http");
const os = require('os'); // модуль окружения и операционной системы
// const greeting = require('./greeting'); //нащ модуль, подключение   
// const User = require('./module/user');
const welcome = require('./welcome');

welcome.getMorningMessage();
welcome.getEveningMessage();

// let eugene = new User('Eugene', 32);
// eugene.sayHi();


http.createServer(function(request, response) {

    let userName = os.userInfo().username;
    let user = os.userInfo();
    // console.log(userName + ' <<<<');

    // console.log(`Дата запроса: ${greeting.date}`);
    // console.log(greeting.getMessage(userName));


    response.end("Hello NodeJS! " + userName);

}).listen(3000, 'localhost', function() {
    console.log('SERVER RUN on port:3000');
});