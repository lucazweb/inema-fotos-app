module.exports = function(app){

  app.get('/', function(req, res){
    var response = {
      status: "Server is running"
    }
    res.json(response);
  });

  return app;
}
