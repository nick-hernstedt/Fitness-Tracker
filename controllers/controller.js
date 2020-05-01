var express = require("express");
const path = require("path");
var router = express.Router();

// path to main page
router.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/index.html`));
});

//path to exercise page
router.get(`/exercise?`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/exercise.html`));
});

//path to see your stats
router.get(`/stats`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/stats.html`));
});

//exporting the controller
module.exports = router;
