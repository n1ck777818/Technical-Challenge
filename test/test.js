var server = require('../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

//Should be able to return a list of items for our application.
describe('List /todo items', function() {
    it('List items /todo', function() {
        chai.request('http://localhost:8080')
          .get('/todo')
          .end(function (err, res) {
             expect(err).to.be.null;
             expect(res).to.have.status(200);
      });
  });
});

//Add an item to our application.
describe('Add item /todo/add', function() {
    it('Add test item /todo/add', function() {
        chai.request('http://localhost:8080')
           .post('/todo/add')
           .send({newtodo: 'testing'})
           .end(function(err, res){
              expect(err).to.be.null;
              expect(res).to.have.status(200);
           });
        });
});

//Delete an item from our application.
describe('Delete item /todo', function() {
  it('Delete test item', function() {
          chai.request('http://localhost:8080')
                .get('/todo/')
                .end(function(err, res){
                chai.request('http://localhost:8080')
                .delete('/todo/delete/testing')
                .end(function(err, resp){
                   expect(err).to.be.null;
                   expect(res).to.have.status(200);
                });
                });
        });
});
