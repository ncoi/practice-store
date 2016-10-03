const express    = require('express'),
      morgan     = require('morgan'),
      mongoose   = require('mongoose'),
      bodyParser = require('body-parser'),
      app        = express(),
      routes     = require('./api/routes/index'),
      Todo       = require('./api/models/shoe');

mongoose.connect('mongodb://localhost/shoestore');


app.use(express.static(__dirname+'/client'));
app.use('/images', express.static(__dirname + '/client/assets/img/'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(routes);


app.listen(8080, function(err){
    if(err) throw err;
    console.log('Server started on port: 8080');
});