//*Частичные представления

const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
//Для настройки функционала частичных представлений в коде используется вызов:
hbs.registerPartials(__dirname + '/views/partials');
//который устанавливает каталог, где располагаются частичные представления.

app.use('/contact', (request, response) => {
    response.render('contact2.hbs', {
        title: 'May Contacts',
        email: 'leo@mail.ru',
        phone: '+7-999-888-7766'
    });
});

app.use('/', (request, response) => {
    response.render('home.hbs');
});

app.listen(3000, () => { console.log('server run'); });



// //*Представления и движок Handlebars
// const express = require('express');

// const app = express();

// app.set('view engine', 'hbs');
// app.set('views', 'templates'); //установка пути к предсталениям

// app.use('/contact', (request, response) => {

//     response.render('contact1.hbs', {
//         title: 'Contacts',
//         emailsVisible: true,
//         emails: ['leo@gmail.com', 'leo@mail.ru'],
//         phone: '+7-111-222-4455'
//     });
// });

// app.use('/', (request, response) => {
//     response.send('Main Page three');
// });

// app.listen(3000, () => { console.log('run server'); });


// //*Представления и движок Handlebars
// const express = require('express');

// const app = express();

// app.set('view engine', 'hbs');

// app.use('/contact', (request, response) => {
//     response.render('contact.hbs', {
//         title: "Мои контакты",
//         email: 'leo@mail.ru',
//         phone: '+7-999-444-1234'
//     });
// });
// app.use('/', (request, response) => {
//     response.send('Main page, two');
// });

// app.listen(3000, () => { console.log('server run'); });




// //* Представления и движок Handlebars
// const { response } = require('express');
// const express = require('express');

// const app = express();

// app.set('view engine', 'hbs'); //Чтобы установить Handlebars в качестве движка представлений в Express, вызывается функция:

// app.use('/contact', (request, response) => {
//     response.render('contact.hbs');
// });
// app.use('/', (request, response) => {
//     response.send('Main page');
// });

// app.listen(3000, () => {
//     console.log('server run');
// });