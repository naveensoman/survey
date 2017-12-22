var Poll = require('../../models/poll');

function get(req, res) {
    //  res.send("GETting Surveys");
    var limit = (req.query.limit && +req.query.limit) || 10;
    var page = (req.query.page && +req.query.page) || 1;
    var skip = (page - 1) * limit;
    Poll.count({}, function(err, count) {
        if (err) {
            res.status(500);
            res.json(err);
            console.log("ERROR!" + err);
            return;
        }
        var meta = {
            limit: limit,
            page: page,
            total: count
        }

        Poll.find({}, {}, {
            limit: limit,
            skip: skip
        }, function(err, Polls) {
            if (err) {
                res.status(500);
                res.json(err);
                console.log("ERROR!" + err);
                return;
            }
            res.json({
                data: Polls,
                meta: meta
            });

        });

    });

}

module.exports = get;