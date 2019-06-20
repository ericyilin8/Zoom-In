var db = require("../models");

module.exports = function(app, path, dirname) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(dirname, "views/index.html"));
   // res.render('index.html');
  //  db.Example.findAll({}).then(function(dbExamples) {
     
    //});
  });

  app.get("/find.html", function(req,res){
    res.sendFile(path.join(dirname, "views/find.html"));
  });

  app.get("/create.html", function(req,res){
    res.sendFile(path.join(dirname, "views/create.html"));
  });

  app.get("/groups.html", function(req,res){
    res.sendFile(path.join(dirname, "views/groups.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
   // res.render("404");
  });
};
