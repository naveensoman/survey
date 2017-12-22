var express = require("express"),
    router = express.Router();

router.get("/", require('./get'));
module.exports = router;