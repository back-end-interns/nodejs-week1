const express = require("express");

const router = express.Router();
const controller = require("../controllers/user-controller");
const verifyToken = require("../middlewares/verifyToken")

router.post("/create", controller.createUser)

router.post("/signin", controller.signInUser)

router.get("/", verifyToken, controller.fetchUser) 

module.exports = router