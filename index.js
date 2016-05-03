var express = require('express');
var app = express();
var path = require("path");

app.set("port", (process.env.PORT || 3000));

app.use(express.static(__dirname + "/app"));
app.use("/lib", express.static(__dirname + "/lib"));

// views is directory for all template files
// app.set("views", __dirname + "/views");
// app.set("view engine", "ejs");

app.get('/', function(req, res) {
    // response.send("HELLO");
    // response.render("index");
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
