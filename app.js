var express = require('express');

var exphbs = require('express-handlebars');

var routes = require('./routes/route.js');
var path = require('path');
var app = express();

app.set('view engine','handlebars');

app.use(express.static(__dirname+'/public'));

app.engine('handlebars', exphbs({defaultLayout:'main'}));

app.get('/', routes.home);

app.get('/:city', routes.city);

var port = 	process.env.PORT || 8080;

var server = app.listen(port, function(req, res){
	console.log('Catch all the action @	localhost:'+port);
});