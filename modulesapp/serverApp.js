const http = require('http');

// request - хранит информацию о запросе, response - управляет отправкой ответа
http.createServer(function(request, response) {

        // console.log('Url: ' + request.url);
        // console.log('Тип запроса: ' + request.method);
        // console.log('User-Agent: ' + request.headers["user-agent"]);
        // console.log('Все заголовки');
        // console.log(request.headers);


        // response.setHeader('UserId', 12);
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write("<head>");
        response.write("<title>Hello Node.js</title>");
        response.write("<meta charset=\"utf-8\" />");
        response.write("</head>");
        response.write("<body>");
        response.write("<h1>Привет миг</h1>");
        response.write("<h2>Привет! Учим Node.js </h2>");
        response.write("<div> Изучаем написание сервера на NODE.JS </div>")
        response.write("</body>");
        response.write("</html>");
        // response.end('Hello! WORLD');
        response.end();
    }

).listen(3000, () => { console.log('RUN Server'); });