const Spot = function (dbSpot) {
  this.id = dbSpot.id;
  this.name = dbSpot.name;
  this.station = dbSpot.area;
  this.type = dbSpot.category;
};


module.exports = (knex) => {
  return {
    create: require("./create")(knex, Spot),
    // get: require("./get")(knex, Spot)
  };
};