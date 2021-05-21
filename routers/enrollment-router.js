const express = require("express");

const router = express.Router();

//refer to controller
const controller = require("../controllers/service-controller");

//Create data
router.post("/create", controller.createService)

//Retrieve data
router.get("/", controller.getData)

//Update
router.put("update", controller.updateService)

//Delete
router.delete("/delete", controller.deleteService)

//exports router
module.exports = router