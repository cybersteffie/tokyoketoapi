const express = require('express');

module.exports = (models) => {
  /* 
  Controller Logic 
  */

  const addSpot = (req, res) =>
    models.spot
    .create({
      "name": req.body.name,
      "area": req.body.area,
      "type": req.body.type,
      "url": req.body.url
    }).then((spot) => {
      console.log(spot);
      res.status(200).json(spot)
    }).catch((err) => {
      res.status(400).send(err)
    })

  // const patchSpots = (req, res) => {
  //   models.spots
  //     .then(
  //       const keys = ["name", "station", "type"];

  //       let obj = {};
  //       for (let property in req.body) {
  //         if (keys.includes(property)) {
  //           obj[property] = req.body[property];
  //         }
  //       })
  // }

  // const deleteSpot = (req, res) => 

  /*
  Routes
  */

  const router = express.Router();

  router.post("/tokyoketo/spots", addSpot)
  // router.get("/tokyoketo/spots", getSpots);
  // router.get("/tokyoketo/spots/:id", getSpotsById);
  // router.patch("/tokyoketo/spots/:id", patchSpot);
  // router.delete("/tokyoketo/spots/:id", deleteSpot);

  return router
};