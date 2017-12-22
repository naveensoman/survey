var express = require("express"),
    router = express.Router();

router.get('/', function (req, res) {
  res.send('Thanks for the survey!');
});

router.use('/survey', require('./survey'));
router.use('/admin', require('./admin'));
router.use('/register', require('./register'));
module.exports = router;