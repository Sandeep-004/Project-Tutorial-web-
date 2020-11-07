const express = require('express');
const app = express();
var http = require('http').Server(app)
const path = require('path')
const bodyParser = require('body-parser')

var port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.get("/tutorial", function(req, res) {
	// body...
	res.sendFile(__dirname+"/index.html");


} );



app.post("/tutorial", function(req, res) {
	// body...
	res.send("Thank You, Your Registration is valuable for us");

	console.log(req.body);
})


var server = http.listen(port, () => {
	console.log("Server is listening on port %d", port)
})