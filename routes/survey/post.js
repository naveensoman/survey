var Poll = require('../../models/poll');

function validateInput(body) {
    return body && body.name && true;
}

function post(req, res) {
    var body = req.body;
    if (!validateInput(body)) {
        res.status(400);
        res.json({
            success: false,
            message: "Bad Request. Please check body"

        })
        return;
    }
    Poll.create(body, function(err, Polls) {
        if (err) {
            res.status(500);
            res.json(err);
            console.log("ERROR!" + err);
            return;
        }

        res.json(Polls);

    });
}



module.exports = post;