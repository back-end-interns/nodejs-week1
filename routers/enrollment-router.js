const { query } = require("express");
const express = require("express");
const { validator } = require("sequelize/types/lib/utils/validator-extras");

const router = express.Router();

//refer to controller
const controller = require("../controllers/service-controller");

//Create data
router.post("/create",validator.query(schema), controller.createService)

//Retrieve data
router.get("/", controller.getData)

//Update
router.put("update", controller.updateService)

//Delete
router.delete("/delete", controller.deleteService)

//exports router
module.exports = router