const express = require('express');

module.exports = (models) => {
  /* 
  Controller Logic 
  */

  const addSpot = (req, res) => {
    console.log(req.body)
    return models.spots
      .create({
        name: req.body.name,
        station: req.body.station,
        category: req.body.category,
        url: req.body.url
      }).then((spot) => {
        console.log(spot);
        res.status(200).json(spot)
      }).catch((err) => {
        console.log("WTF!")
        res.status(400).send(err)
      })
  }

  // const patchSpots = (req, res) => {
  //   models.spots.then(() => {
  //     const keys = ["name", "station", "type"]

  //     let obj = {};
  //     for (let property in req.body) {
  //       if (keys.includes(property)) {
  //         obj[property] = req.body[property];
  //       }
  //     }
  //   }).then((spot) => {
  //     console.log(spot);
  //     res.status(200).json(spot)
  //   }).catch((err) => {
  //     res.status(400).send(err)
  //   })
  // }

  // const deleteSpot = (req, res) => {
  //   models.spots.then(() => {
  //     const keys = ["name", "station", "type"]

  //     let obj = {};
  //     for (let property in req.body) {
  //       if (keys.includes(property)) {
  //         obj[property] = req.body[property];
  //       }
  //     }
  //   }).then((spot) => {
  //     console.log(spot);
  //     res.status(200).json(spot)
  //   }).catch((err) => {
  //     res.status(400).send(err)
  //   })
  // }

  /*
  Routes
  */

  const router = express.Router();

  router.post("/", addSpot)
  // router.get("/"", getSpots);
  // router.get("/:id", getSpotsById);
  // router.patch("/:id", patchSpot);
  // router.delete("/:id", deleteSpot);

  return router
};