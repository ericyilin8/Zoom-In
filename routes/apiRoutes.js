var db = require("../models");

module.exports = function (app) {
  // Get my events, i send my user id to get my user from User
  //then getEvents from user
  //client sends user id
  app.get("/api/MyEvents", function (req, res) {
    db.Event.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new event and associate with user from User
  //client sends user id
  app.post("/api/CreateEvent", function (req, res) {
    var event = {
      eventName: req.body.eventName,
      eventZip: req.body.eventZip,
      eventDate: req.body.eventDate,
      eventDescription: req.body.eventDescription,
      PhotocategoryId: req.body.categoryid
    };
    var userid = req.body.userid;
    db.Event.create(event).then(function (eventInstance) {
      //res.json(dbExample);
      //eventInstance.setPhotocategory(categoryInstance);

      db.User.findOne({ where: { id: userid } }).then(function (userInstance) {
        userInstance.addEvent(eventInstance);
        res.send("Event created!");
      })

    });

  });

  // Remove me from an event
  //client sends event id and user id
  //get user from User and event from Event
  // event.remove user
  //or use EventUser model?
  //if event has no associated users, delete from Event
  app.delete("/api/RemoveMe", function (req, res) {

    var userid = req.query.userid;
    var eventid = req.query.eventid;

    console.log(userid);
    console.log(eventid);

    db.User.findOne({ where: { id: userid } }).then(function (returnedUser) {

      db.Event.findOne({ where: { id: eventid } }).then(function (returnedEvent) {

        returnedUser.removeEvent(returnedEvent).then(function () {

          returnedEvent.getUsers().then(function (response) {
            if (response.length == 0) {

              db.Event.destroy({ where: { id: eventid } }).then(function (dbExample) {
                //res.json(dbExample);
                res.send("Event deleted.");
              });


            }
          })

        })

      });

    })




  });

  /*app.post("/api/CreateUser", function (req, res) {
    var user = {
      name: req.body.name,
      zip: req.body.zip,
      email: req.body.email,
      password: req.body.password,

    };
    var categoryid = req.body.categoryid;

    db.Photocategory.findOne({ where: { id: categoryid } }).then(function (categoryInstance) {
      db.User.create(user).then(function (createdUser) {
        //only send user id and name
        createdUser.addPhotocategory(categoryInstance);

        var returnedObj = {
          userid: createdUser.id,
          name: createdUser.name
        };
        res.json(returnedObj);
      });

    });



  })*/

  app.post("/api/CreateUser", function (req, res) {

    var user = {};
    var saltRounds = 3;
    var bcrypt = require('bcrypt');
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
    user = {
      name: req.body.name,
      zip: req.body.zip,
      email: req.body.email,
      password: hash,
 
    }
  });

    var categoryid = req.body.categoryid;
 
    db.Photocategory.findOne({ where: { id: categoryid } }).then(function (categoryInstance) {
      db.User.create(user).then(function (createdUser) {
        //only send user id and name
        createdUser.addPhotocategory(categoryInstance);
 
        var returnedObj = {
          userid: createdUser.id,
          name: createdUser.name
        };
        res.json(returnedObj);
      });
 
    });

  });
  /*app.post("/api/SignIn", function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    db.User.findOne({ where: { email: email, password: password } }).then(function (user) {
      if (user) {
        var returnedObj = {
          userid: user.id,
          name: user.name

        };

        res.json(returnedObj);

      } else {
        res.send("");
      }

    })

  })*/

  app.post("/api/SignIn", function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log(password);
 
    db.User.findOne({ where: { email: email } }).then(function (user) {
      var bcrypt = require('bcrypt');
      bcrypt.compare(password, user.password, function(err, result) {
      console.log(user.password);
      if (user) {
        var returnedObj = {
          userid: user.id,
          name: user.name
 
        };
 
        res.json(returnedObj);
 
      } else {
        res.send("");
      }
    })
    })
 
  })

  //get my events
  app.get("/api/GetMyEvents/:id", function (req, res) {
    var userid = req.params.id;


    db.User.findOne({ where: { id: userid } }).then(function (userInstance) {
      userInstance.getEvents().then(function (eventArr) {
        res.json(eventArr);

      });
    });

    /*db.EventUser.findAll({where: {UserId: userid}, order: "createdAt"}).then(function(eventArr){
      res.json(eventArr)
    }) did not work*/


  })

  app.get("/api/FindEvents", function(req, res){

    console.log('bye');
    var userid = req.query.userid;
    var zip = req.query.zip;
    var categoryid = req.query.categoryid;
    var apikey = process.env.API_Key;

    var url = 'https://www.zipcodeapi.com/rest/'+apikey+'/radius.json/'+zip+'/10/mile';

    var request = require('request');
    request.get(url, {json: true}, function(err, res2) {
      console.log(res2);
        if (!err && res2.statusCode === 200) {
          var sortedZips = res2.body.zip_codes.sort(function(a,b){

            a.distance - b.distance;
  
  
          });
  
          var zipcodes = [];
          sortedZips.forEach(function(val, index){
  
            zipcodes.push(val.zip_code);
  
          })

          db.User.findOne({where: {id: userid}}).then(function(user){

            user.getEvents().then(function(eventArr){

              var eventids = [0]; //null is not false in sql

              eventArr.forEach(function(val, index){

                eventids.push(val.id);


              })

              var Op = db.Sequelize.Op;

              db.Event.findAll({where : { [Op.and]: ({PhotocategoryId: categoryid}, {eventZip: zipcodes}), [Op.not]: {id: eventids} } }).then(function(eventsArr){

                res.json(eventsArr);
          
          
              })

            })

          })

      


            /*funcTwo(body, function(err, output) {


                console.log(err, output);
            });*/
        }
    });





    });


    app.post("/api/AddMe", function(req,res){
      var userid = req.body.userid;
      var eventid = req.body.eventid;


      db.User.findOne({where: {id: userid}}).then(function(user){

        db.Event.findOne({where: {id: eventid}}).then(function(event){
          event.addUser(user);
          res.send("Success!");
        })
      })

    })


};



//create user


//authenticate user