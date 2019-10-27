const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

const config = require("../config");
const knex = require("knex")(config.db);

describe("Pokemon API Server", () => {

  describe('Server', function () {
    it('should serve a basic html page', () => {
      chai.request('http://localhost:4000', (res) => {
        assert.equal(4000);
        done();
      })
    })
    it("should be able to connect to database", () =>
      knex
      .raw("select 1+1 as result")
      .catch(() => assert.fail("unable to connect to db")));
  });
})