/**
 * Created by User on 08.11.2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
//
// router.get('/', function(req, res, next) {
//     var a = req.query.a;
//     var b = req.query.b;
//     var result = '';
//
//     if (isNaN(a) && isNaN(b)){
//         result = 0;
//     } else
//     if (!isNaN(a) || !isNaN(b)) {
//         console.log('1');
//         if (!isNaN(a) && !isNaN(b)) {
//             result = Number(a) + Number(b);
//         } else {
//             if (!isNaN(a)){
//                 result = Number(a);
//             } else if (!isNaN(b)){
//                 result = Number(b);
//             }
//         }
//     }
//
//     res.send(result.toString());
// });

router.get('/', function(req, res, next) {
    var lastName, firstName, patroName, result;
    var fullname = req.query.fullname;
    var reg = /\d/;

    if (reg.test(fullname)){
        res.send('Invalid fullname');
    } else {

        var resultArr = fullname.split(' ');

        if (resultArr.length == 1) {
            console.log(resultArr[0]);
            lastName = resultArr[0];
        } else if (resultArr.length == 2) {
            lastName = resultArr[1];
            firstName = resultArr[0];
        } else if (resultArr.length == 3) {
            lastName = resultArr[2];
            firstName = resultArr[0];
            patroName = resultArr[1];
        }

        if (lastName && firstName && patroName) {
            result = lastName + ' ' + firstName[0] + '. ' + patroName[0] + '.';
        } else if (lastName && firstName) {
            result = lastName + ' ' + firstName[0] + '.';
        } else if (lastName) {
            result = lastName;
        } else {
            result = 'Invalid fullname';
        }
        res.send(result);
    }


});

module.exports = router;