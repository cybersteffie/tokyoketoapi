const moment = require("moment");

const Spot = function(dbUser) {
    this.id = spot.id;
    this.name = spot.name;
    this.station = spot.area;
    this.type = spot.category;
};


module.exports = (knex) => {
  return {
    create: require("./create")(knex, Spot),
    // get: require("./get")(knex, Spot),
  };
};
