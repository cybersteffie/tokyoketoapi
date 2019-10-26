// const { setupServer } = require('../server.js');
// const server = setupServer();

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

describe("Pokemon API Server", () => {
  // beforeEach(() => {
  //   const request = chai.request(server);
  // });

  describe('Server', function() {
    it('should serve a basic html page', function() {
        chai.request('http://localhost:400', (res) =>{
            assert.equal(400);
            done();
        })
    })
    describe('Server', function() {
      it('should serve a basic html page', function() {
          chai.request('http://localhost:400', (res) =>{
              assert.equal(400);
              done();
          })
      })
  });
}
);
