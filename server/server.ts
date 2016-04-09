import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

/*var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.get('/*', renderIndex);*/


var router = express.Router();
router.get('/*', function(req, res) {
   res.sendFile(path.resolve(__dirname, 'index.html'));
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
/*      newItem.save(newItem);

      console.log(' This is the inserted data' + newItem);*/
      }
});
