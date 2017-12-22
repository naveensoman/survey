var express = require("express"),
    router = express.Router();

router.post("/", require('./post'));
module.exports = router;