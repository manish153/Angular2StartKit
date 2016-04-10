import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Bear = require('./models/bear');  // I think this needs to be configured in gulp to export the models to dist folder. note sure.

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

/*var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.get('/*', renderIndex);*/


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/app/*', function(req, res) {
   res.sendFile(path.resolve(__dirname, 'index.html'));
});

router.get('/api', function(req, res) {
   res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/api/bears')
    .post(function(req, res) {        
        var bear = new Bear();
        bear.name = req.body.name;

        bear.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Bear created!' });
        });
  })
    .get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
  });
  
  router.route('/api/bears/:bear_id')    
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    });


app.use('/', router);


var dbstring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://heroku_cb2hb6wm:5plmn61cgsp0l5roqa2qh83mgk@ds011439.mlab.com:11439/heroku_cb2hb6wm';

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});

mongoose.connect(dbstring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + dbstring + '. ' + err);
      } else {
      console.log ('Successfully connected to: ' + dbstring);
      };
});
