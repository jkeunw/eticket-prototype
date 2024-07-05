var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
const {getContent} = require('./routes/ticket-content');
const {ticketToken} = require('./routes/ticket-token');
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "smart-ticket"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database");
});
global.db = db;

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ticket', getContent);
app.get('/ticket-token', ticketToken);

app.listen(8080, function(){
  console.log('Server running on port 8080');
});
