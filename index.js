var express = require('express');
var app = express();
var path = require("path");

app.set("port", (process.env.PORT || 3000));

app.use(express.static(__dirname + "/public"));
app.use("systemjs.config.js", express.static(__dirname + "/systemjs.config.js"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/lib", express.static(__dirname + "/lib"));
app.use("/favicon.ico", express.static(__dirname + "/favicon.ico"));

// views is directory for all template files
// app.set("views", __dirname + "/views");
// app.set("view engine", "ejs");

app.get('/systemjs.config.js', function(req, res) {
    res.sendFile(path.join(__dirname + "/systemjs.config.js"));
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
