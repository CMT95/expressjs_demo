const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = __dirname + '/public/';

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static('wwwroot'));

app.get('/', function (req, res) {
    res.sendFile( path +'index.html', function (err) {
        // handle error
    });
});


app.get('/index', function (req, res) {
    res.sendFile( path +'index.html', function (err) {
        // handle error
    });
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
        res.sendFile(path + 'event.html', function (err) {
            
        });
    }else
    {
        res.sendFile( path +'login.html', function (err) {
            // handle error
        });
    }
});

app.get('/about', function (req, res) {
    res.sendFile(path + 'about.html', function (err) {
        //handle error
    });
});
app.get('/contact', function (req, res) {
    res.sendFile(path + 'contact.html', function (err) {
        //handle error
    });
});

app.listen(3000);