//=======================================================setup

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3005;
var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//=======================================================


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);




//listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});