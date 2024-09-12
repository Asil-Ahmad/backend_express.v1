const express = require("express");
const router = express.Router(); //this helps u to create routes

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("adminLogin", { title: "Admin Login" });
});

module.exports = router;
