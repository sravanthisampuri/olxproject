var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.static('dist', { index: '/index.html' }));

app.listen(3000);

app.use(function (req, res, next) {

    console.log(req.url);

    if (/^\/v1.0\//.test(req.url)) {
        next();
    } else {
        console.log('index');

        res.sendFile(__dirname + '/dist/index.html');
    }

});
