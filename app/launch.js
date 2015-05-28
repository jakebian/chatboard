var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
})

var PORT = 2000;

app.listen(PORT, function () {
    console.log("launched on port " + PORT);
});