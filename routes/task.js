/**
 * Created by User on 08.11.2016.
 */
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var axios = require('axios');

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

/*router.get('/', function(req, res, next) {
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
*/

/*
router.get('/', function(req, res, next) {
    var username = req.query.username;
    var subUser = '';

    if(username){
        if (username.match(/@\w+/g)){
            subUser = username.match(/@\w+/g)[0];
        } else {
            if (username.lastIndexOf("/") != -1) {
                subUser = '@'+ username.match( /\w+\w+.\w+\/\w+.+/g )[0].split('/')[1];
            } else {
                subUser = '@'+ username.match( /\w+/g )[0];
            }
        }
        res.send(subUser);

    } else {
        res.send('Invalid username');
    }

});
*/

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {"board":{"vendor":"IBM","model":"IBM-PC S-100","cpu":{"model":"80286","hz":12000},"image":"http://www.s100computers.com/My%20System%20Pages/80286%20Board/Picture%20of%2080286%20V2%20BoardJPG.jpg","video":"http://www.s100computers.com/My%20System%20Pages/80286%20Board/80286-Demo3.mp4"},"ram":{"vendor":"CTS","volume":1048576,"pins":30},"os":"MS-DOS 1.25","floppy":0,"hdd":[{"vendor":"Samsung","size":33554432,"volume":"C:"},{"vendor":"Maxtor","size":16777216,"volume":"D:"},{"vendor":"Maxtor","size":8388608,"volume":"C:"}],"monitor":null,"length":42,"height":21,"width":54};

/*   let pc = {};
    axios.get(pcUrl)
    .then(res => {
        pc = res.data;
        //console.log(pc);
    })
    .catch(err => {
        console.log('Чтото пошло не так:', err);
    });*/
/*
router.get('/volumes', function (req,res,next) {
    function getSum(letter, arr){
        let res = 0;
        for (let i = 0; i < arr.length; i++){
            let item = arr[i];
            //console.log(item);
            if (item.volume == letter){
                res += item.size;
            }
        }
        return res;
    }

    let hdd = pc["hdd"];
    let totals = {};
    let arrHdds = [];
    for (let i = 0; i < hdd.length; i++){
        if (arrHdds.indexOf(hdd[i]["volume"])){
            arrHdds.push(hdd[i]["volume"]);
        }
    }


    for (let i = 0; i < arrHdds.length; i++) {
        console.log(arrHdds[i] + " = " + getSum(arrHdds[i],hdd));
        totals[arrHdds[i]] = getSum(arrHdds[i],hdd)+'B';
    }


    res.send(totals);
});

router.get('/', function (req,res,next) {
    res.send(pc)
});

router.get('/*', function(req, res, next) {
    function getValue(obj, val){
        let res = obj[val];
        return res;
    }

    let arr = req.originalUrl.split('/');
    let q = {};
    for (let i = 2; i < arr.length; i++) {
        // q = pc[arr[i]];
        if (q !== undefined) {
            if (Object.keys(q).length > 0) {
                //if (getValue(q, arr[i]) != undefined) {
                    q = getValue(q, arr[i]);
                //}
            } else {
                console.log("2");
                //if (getValue(pc, arr[i]) != undefined) {
                    q = getValue(pc, arr[i]);
                //}
            }
        }
    }
    //q = q.slice(0, q.length - 1);

    // if (typeof q == "string" || typeof q == "number"){
    //     q = "\"" + q + "\"";
    // }
         if (q === undefined){
             res.send(404,'Not Found');
         }

         if (typeof q != "object" || Object.keys(q).length > 0) {
             res.json(q);
         } else {
             res.send(404,'Not Found');
         }

     });
*/

router.get('/', function (req,res,next){

    function hexTo(rgb) {

        function hex(x) {

                return !isNaN(parseInt(x, 16)) && parseInt(x, 16) <= 255 ? x.toString().toLocaleLowerCase() : false;
        }

        let rgFull = [];
        let result = '';
        let rg = rgb.split('');
        if (rg[0] == '#'){
            rg.shift();
        }
        if (rg.length > 6) {
            result = 'Invalid color';
        } else {
            if (rg.length == 3) {
                rg = rg.forEach(item => {
                    rgFull.push(item);
                    rgFull.push(item);
                });
            }
            if (rgFull.length == 0) {
                rgFull = rg;
            }
            if (hex(rgFull[0]+rgFull[1]) && hex(rgFull[2]+rgFull[3]) && hex(rgFull[4]+rgFull[5])){
                result = '#' + hex(rgFull[0]+rgFull[1]) + hex(rgFull[2]+rgFull[3]) + hex(rgFull[4]+rgFull[5]);
            } else {
                result = 'Invalid color';
            }

        }

        return  result;
    }

    function rgb2hex(rgb) {
        if (  rgb.search("rgb") == -1 ) {
            return rgb;
        }
        else if ( rgb == 'rgba(0, 0, 0, 0)' ) {
            return 'transparent';
        }
        else {
            rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            if (rgb !== null && rgb[rgb.length-1] == undefined){
                if (rgb[1] <= 255 && rgb[2] <= 255 && rgb[3] <= 255 ){
                    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
                }else {
                    return 'Invalid color';
                }
            }else {
                return 'Invalid color';
            }

        }
    }


    var result = '';
    var color = req.query.color;
    if (color){
        if (color.indexOf("rgb") == -1){
            var regEx = color.replace(/ /g,"").match(/[^A-Fa-f0-9#]/g);
            if (regEx !== null){
                result = 'Invalid color';
            } else {
                result = hexTo(color.replace(/ /g,""));
            }
        } else {
            result = rgb2hex(color.replace(/ /g,""));
        }

    } else {
        result = 'Invalid color';
    }

    res.send(result);
});

module.exports = router;