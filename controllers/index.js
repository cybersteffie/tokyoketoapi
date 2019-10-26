const express = require("express");

const router = express.Router();

const spotRouter = require("./spots");

module.exports = (models) => {
  router.use("/spots", spotRouter(models));
  return router
};