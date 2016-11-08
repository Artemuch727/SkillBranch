/**
 * Created by User on 08.11.2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
    var a = req.query.a;
    var b = req.query.b;
    var result = '';

    if (isNaN(a) && isNaN(b)){
        result = 0;
    } else
    if (!isNaN(a) || !isNaN(b)) {
        console.log('1');
        if (!isNaN(a) && !isNaN(b)) {
            result = Number(a) + Number(b);
        } else {
            if (!isNaN(a)){
                result = Number(a);
            } else if (!isNaN(b)){
                result = Number(b);
            }
        }
    }

    res.send(result.toString());
});

module.exports = router;