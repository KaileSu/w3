var express = require('express');
var app = express();
var fs = require('fs');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var http = require("http").Server(app);
app.use(express.static(__dirname + '/www'));

var server = http.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on:"+ host + "port:" + port );
  });
  
app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/myfirst.html');
});

app.post('/test1', function (req, res) {
    var u = req.body.username;
    var p = req.body.psw;
    c= u+":"+p;
    console.log(c);
    fs.readFile('www/myfirst.html', 'utf8', function(err, data) {
        if (err) throw err;
        var pos = data.search(c);
        var obj = {"ok":false,errors:{}};
        var obj2 = {"ok":false,errors:{}};
        if (pos == -1) {
            console.log("no");
            res.send(JSON.stringify(obj));
           // res.json( {"ok":false,errors:{}});
        } else {
            res.send(JSON.stringify(obj2));
            //res.json({"ok":true});
        }
    });

});


app.post('/test2', function (req, res) {
    var u = req.body.username;
    var p = req.body.psw;
    c= u+":"+p;
    console.log(c);
    fs.readFile('www/myfirst.html', 'utf8', function(err, data) {
        if (err) throw err;
        var pos = data.search(c);
        var obj = {"ok":false,errors:{}};
        var obj2 = {"ok":true};
        if (pos == -1) {
           res.json(obj);
        } else {
           res.json(obj2);
        }
    });

});