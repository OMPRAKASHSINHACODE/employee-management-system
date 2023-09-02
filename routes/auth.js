var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/hhh', function(req, res, next) {
  res.send('heloo sablog');
});
router.get('/data/:id', function(req, res, next) {
  
  if(req.params.id<5)
    {
       res.send("your number is less than five");
    }
  else{
    res.send(req.params.id);
  }  
});
router.post('/', function(req, res, next) {
  const number=req.body.number
  console.log(number)
 // res.send("hello indra")
  res.send(500);
})


module.exports = router;
