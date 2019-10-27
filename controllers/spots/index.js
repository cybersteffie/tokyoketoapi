const express = require('express');

module.exports = (models) => {
  /* 
  Controller Logic 
  */

  const addSpot = (req, res) => {
    console.log("CONTROLLER addSpot > req.body", req.body)
    return models.spots
      .create({
        name: req.body.name,
        station: req.body.station,
        category: req.body.category,
        url: req.body.url
      }).then((spot) => {
        console.log("CONTROLLER addSpot > spot", spot)
        res.status(200).json(spot)
      }).catch((err) => {
        console.log("CONTROLLER addSpot > ERROR")
        res.status(400).send(err)
      })
  }

  const patchSpot = (req, res) => {
    console.log("CONTROLLER patchSpot > req.body", req.body)
    console.log("CONTROLLER patchSpot > req.body", req.params.id)
    return models.spots.patch({
      id: req.params.id,
      name: req.body.name,
      station: req.body.station,
      category: req.body.category,
      url: req.body.url
    }).then((spot) => {
      console.log("CONTROLLER patchSpot > spot", spot)
      res.status(200).json(spot)
    }).catch((err) => {
      console.log("CONTROLLER patchSpot > ERROR")
      res.status(400).send(err)
    })
  }

  const deleteSpot = (req, res) => {
    console.log("CONTROLLER deleteSpot > req.body", req.body)
    return models.spots.delete({
      id: req.params.id,
    }).then((spot) => {
      console.log("CONTROLLER deleteSpot > spot", spot)
      res.status(200).json(spot)
    }).catch((err) => {
      console.log("CONTROLLER deleteSpot > ERROR")
      res.status(400).send(err)
    })
  }

  const getSpots = (req, res) => {
    console.log("CONTROLLER getSpots")
    return models.spots.get().then((spots) => {
      console.log("CONTROLLER getSpots > spots", spots)
      res.status(200).json(spots)
    }).catch((err) => {
      console.log("CONTROLLER getSpots > ERROR")
      res.status(400).send(err)
    })
  }

  /*
  Routes
  */

  const router = express.Router();

  router.post("/", addSpot);
  router.patch("/:id", patchSpot);
  router.delete("/:id", deleteSpot);
  router.get("/", getSpots);
  // router.get("/:id", getSpotsById);


  return router
};