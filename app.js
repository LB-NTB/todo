var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// create application/json parser
var jsonParser = bodyParser.json()

var tasks = [
	{
	taskid: 1,
	task: "initial Task",
	checked: false
	}
];
var task = "";
var taskimport = "";
var id = 1;

// Router und Controller
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/todo.html'));
});

// app.get('/items', function (req, res) {
//   res.send('Das sind viele Items');
// });

// app.get('/create?:pendenz', function(req, res) {
// 	//res.send('Das sind create Items');
//   	res.send('Add: ' + req.query.pendenz);
// });

app.post('/create', function(req, res) {
	taskimport = req.body.pendenz;
	task = {
		taskid: 1 + id,
		task: taskimport,
		checked: false
	};
	tasks.push(task);
	res.redirect('/listTasks').sendStatus(200);

})

app.get('/listTasks', function(req, res) {
	var json = JSON.stringify(tasks);
	res.json(json);
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});