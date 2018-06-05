var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burger_controller.js');
app.use('/', router);

var port = process.env.PORT || 3000;
app.listen(port);