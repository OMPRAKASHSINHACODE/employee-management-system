var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  return res.send({
    message:"Hello vimal sadan"
  });
});

module.exports = router;
