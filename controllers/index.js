const express = require("express");
const router = express.Router();

// references ./spots/index.js routers for specific tables
const spotRouter = require("./spots");

// express router will use 'index.js' file under specified folder
module.exports = (models) => {
  router.use("/spots", spotRouter(models));

  return router;
};