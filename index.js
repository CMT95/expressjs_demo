const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = __dirname + '/public/';

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function (req, res) {
    res.send('Hello WORLD!');
});

app.get('/testdigselv', function (req, res) {
    res.send('hello from test')
});

app.get('/login', function (req, res) {
    res.sendFile( path +'login.html', function (err) {
        // handle error
    });
});

app.post('/login', function (req, res) {
    console.log(req.body.user);
    console.log(req.body.pass);

    if (req.body.user === 'cihat') 
    {
        res.sendFile(path + 'secret.html', function (err) {
            
        });
    }else
    {
        res.sendFile( path +'login.html', function (err) {
            // handle error
        });
    }
});

app.listen(3000);