const http = require('http');

// request - хранит информацию о запросе, response - управляет отправкой ответа
http.createServer(function(request, response) {

        console.log('Url: ' + request.url);
        console.log('Тип запроса: ' + request.method);
        console.log('User-Agent: ' + request.headers["user-agent"]);
        console.log('Все заголовки');
        console.log(request.headers);

        response.write('bla bla bla  bls \n');
        response.end('Hello! WORLD');
    }

).listen(3000, () => { console.log('RUN Server'); });