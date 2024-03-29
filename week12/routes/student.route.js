const express = require("express");
const { studentView } = require("../controllers/student.controller");

// Create Express Router
const router = express.Router();

// handle the '/student' url with GET METHOD to use studentView funstionfrom controller
router.get('/student', studentView);

// Export the router
module.exports = router;