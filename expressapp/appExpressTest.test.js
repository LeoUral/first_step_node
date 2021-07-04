const request = require('supertest');
let assert = require('assert');

let app = require('./appExpressTest').app;

it('Should return Hello Test', (done) => {
    request(app)
        .get('/')
        .expect('Hello Test')
        .end(done);
});

it('Should return NotFound with status 404', (done) => {
    request(app)
        .get('/error')
        .expect(404)
        .expect("NotFound")
        .end(done);
});

it('Should return user name Tome and age 22', (done) => {
    request(app)
        .get('/user')
        .expect((response) => {
            assert.deepEqual(response.body, { name: 'Tom', age: 22 });
        })
        .end(done);
});