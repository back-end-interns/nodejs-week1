var json = require('jsobwebtoken');
const { secret } = require("../config/token")

function verifyToken(req, res, next) {
    var token = req.header['x-access-token'];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    
    json.verify(token, secret, function(err, decoded){
        if(err)
            return res.status(500).send({ auth: false, message: "Faiiled to autheticate token."});
            
            req.id = decoded.id;
            req.username = decoded.username;
            next();
    });
}

module.exports = verifyToken;