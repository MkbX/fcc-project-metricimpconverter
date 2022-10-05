const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('it should convert a valid input such as 10L', function(done) {
        chai.request(server).get('/api/convert?input=10L')
        .end(function (err, res) {
            assert.equal(res.body.initNum,'10');
            done();

        });

    });
    test('it should convert an invalid input such as 32g', function(done) {
        chai.request(server).get('/api/convert?input=32g')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            done();

        });

    });
    test('it should convert an invalid number such as 3/7.2/4kg', function(done) {
        chai.request(server).get('/api/convert?input=3/7.2/4kg')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            done();

        });

    });
    test('it should convert an invalid number AND unit such as 3/7.2/4kilomegagram', function(done) {
        chai.request(server).get('/api/convert?input=3/7.2/4kilomegagram')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            done();

        });

    });
    test('it should convert with no number such as kg', function(done) {
        chai.request(server).get('/api/convert?input=kg')
        .end(function (err, res) {
            assert.equal(res.body.initNum,'1');
            done();

        });

    });

});
