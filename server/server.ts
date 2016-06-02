import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var cors = require('cors');
var router = express.Router();

var Apartment = require('./models/apartment');
var BusinessUnit = require('./models/businessunit'); 
var Task = require('./models/task');

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use(cors());

var dbstring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://heroku_d4n6hnhl:q4rfc1uikd51d5sups9mipivnl@ds057254.mlab.com:57254/heroku_d4n6hnhl';

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});

var authCheck = jwt({
  secret: new Buffer('460DPY7Pi4xnRUiirPuEfBdxS4wzQGcx8rlA-Qw76fURkmiwtrhv_IXffzsI84HM', 'base64'),
  audience: '1mvHGykVHvxzpwstp2wTmrzLrpzouVTm'
});

mongoose.connect(dbstring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + dbstring + '. ' + err);
      } else {
      console.log ('Successfully connected to: ' + dbstring);
      };
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/app/*', function(req, res) {
   res.sendFile(path.resolve(__dirname, 'index.html'));
});

router.get('/api',authCheck, function(req, res) {
   res.json({ message: 'hooray! welcome to our api!' });
});

   router.route('/api/apartments')
    .post(function(req, res) {        
        var apartment = new Apartment();
        apartment.UnitAddress = req.body.taskname;

        apartment.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Apartment created!' });
        });
  })
  //   .get(function(req, res) {
  //       Apartment.find(function(err, apartments) {
  //           if (err)
  //               res.send(err);

  //           res.json(apartments);
  //       });
  // });

  .get(function(req, res) {
        Apartment.find({unitID: {$exists: true}, UnitType: {$exists: true}},'unitID UnitType',function(err, apartments) {
            if (err)
                res.send(err);

            res.json(apartments);
        });
  });
  
  router.route('/api/apartments/:apartment_id')    
    .get(function(req, res) {
        Apartment.findById(req.params.apartment_id, function(err, apartment) {
            if (err)
                res.send(err);
            res.json(apartment);
        });
    })

    router.route('/api/apartments/getprofile/:userEmail')    
    .get(function(req, res) {
        Apartment.find({userEmail:req.params.userEmail},'-_id', function(err, apartment) {
            if (err)
                res.send(err);
            res.json(apartment);
        });
    })

   //  **The above code can be written as follows as well **
   //  router.route('/api/apartments/getprofile1/:UserEmail')    
   //  .get(function(req, res, next) {
   //      var query = Apartment.find({}).select('.where({userEmail:req.params.UserEmail}); -_id').where({userEmail:req.params.UserEmail});
   //         query.exec(function (err, Apartment) {
   //      if (err) return next(err);
   //      res.send(Apartment);
   //  });
   // })

    .put(function(req, res) {
        Apartment.findById(req.params.apartment_id, function(err, apartment) {
            if (err)
                res.send(err);
            apartment.name = req.body.name;  
            apartment.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'apartment updated!' });
            });
        });
    })

    .delete(function(req, res) {
        Apartment.remove({
            _id: req.params.apartment_id
        }, function(err, apartment) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

    router.route('/api/businessunits')             
    .get(function(req, res) {
        BusinessUnit.find(function(err, businessunits) {
            if (err)
                res.send(err);

            res.json(businessunits);
        });
  });
  
  /*Task Endpoints*/

  router.route('/api/newtask')
    .post(function(req, res) {        
        var task = new Task();
        task.taskname = req.body.taskname;
        task.taskdesc = req.body.taskdesc;
        task.taskstatus = req.body.taskstatus;

        task.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Task created!' });
        });
  })
    .get(function(req, res) {
        Task.find(function(err, tasks) {
            if (err)
                res.send(err);

            res.json(tasks);
        });
  });

  router.route('/api/mytask/:userEmail')    
    .get(function(req, res) {
        Task.find({assignedto:req.params.userEmail.toLowerCase()}, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
  })  
  
  router.route('/api/newtask/:_id')    
    .get(function(req, res) {
        Task.findById(req.params.task_id, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    })

    .put(function(req, res) {
        Task.findById(req.params._id, function(err, task) {
            if (err)
                res.send(err);
            task.taskname = req.body.taskname;  
            task.taskdesc = req.body.taskdesc;
            task.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'task updated!' });
            });
        });
    })

    .delete(function(req, res) {
        Task.remove({
            _id: req.params.task_id
        }, function(err, task) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

app.use('/', router);