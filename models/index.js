module.exports = function (knex) {
  return {
    spots: require("./spots")(knex),
    //   channels: require("./channels")(knex),
  };
};