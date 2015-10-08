var express = require('express');
var router = express.Router();
var dblib = require('./../lib/db_lib');

//Login
router.post('/login', function (req, res, next) {
  dblib.findUserByUserName(req.body.username).then(function (user) {
    if (user){
      if (bcrypt.compareSync(req.body.password, user.password)){
        req.session.user = user._id;
        res.json(user);
      } else {
        res.json("Password Incorrect");
      }
    } else {
      res.json("User Not Found");
    }
  });
});

module.exports = router;
