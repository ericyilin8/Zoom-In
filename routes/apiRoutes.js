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

        db.User.findOne({where:{id: userid}}).then(function(userInstance){
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
  app.delete("/api/RemoveMe/:id", function (req, res) {
    db.Event.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      //res.json(dbExample);
      res.send("Event deleted.");
    });
  });

  app.post("/api/CreateUser", function (req, res) {
    var user = {
      name: req.body.name,
      zip: req.body.zip,
      email: req.body.email,
      password: req.body.password,

    };
    var categoryid = req.body.categoryid;

    db.Photocategory.findOne({where: {id: categoryid}}).then(function(categoryInstance){
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

 

  })

  app.post("/api/SignIn", function (req, res) {
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

  })

  //get my events
  app.get("/api/GetMyEvents/:id", function ( req, res) {
    var userid = req.params.id;


    db.User.findOne({where: {id: userid}}).then(function(userInstance){
      userInstance.getEvents().then(function(eventArr){
        res.json(eventArr);

      });
    });

    /*db.EventUser.findAll({where: {UserId: userid}, order: "createdAt"}).then(function(eventArr){
      res.json(eventArr)
    }) did not work*/


  })

};

//get events near me in time and space




//create user


//authenticate user