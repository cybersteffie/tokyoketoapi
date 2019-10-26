// take in dbData and create a Spot obj to throw into methods

const Spot = function (dbSpot) {
  this.name = dbSpot.name;
  this.category = dbSpot.category;
  this.station = dbSpot.station;
  this.url = dbSpot.url;
};


module.exports = (knex) => {
  return {
    create: require("./create")(knex, Spot)
    // get: require("./get")(knex, Spot)
  };
};