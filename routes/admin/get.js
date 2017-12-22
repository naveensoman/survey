var Poll = require('../../models/poll');
var admin = require("./admin");


function get(req, res) {
  res.marko(admin,{
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    });
}


module.exports = get;