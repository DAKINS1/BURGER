// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
// Specify the port.
var port = process.env.PORT || 3010;

// Create an instance of the express app.
var app = express();

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Data parsing using npm body-parser into json format
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Import routes and give the server access to them
var routes = require('./controllers/burger_controller.js');

app.use('/', routes);


app.listen(port);