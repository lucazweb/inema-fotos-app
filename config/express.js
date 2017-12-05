var express = require("express");
var bodyParser = require("body-parser");
var consign = require("consign");


module.exports = function(){
  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extend:true}));
  app.use(express.static("./public"));

  consign({cwd: 'app'})
    .include('routes')
    .then('infra')
    .into(app);

  return app;
}
