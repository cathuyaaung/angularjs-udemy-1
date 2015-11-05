# angularjs-udemy-1
Anthony Alicea - Learn and Understand AngularJS  
https://www.udemy.com/learn-angularjs/learn/#/

# Git: How to create Repositary from Existing Folder
- cd <localdir>
- git init
- git add .
- git commit -m 'message'
- git remote add origin <url>
- git push -u origin master


# Initializing
- npm init
- npm install express -save
- npm install bower --save

- bower install angular --save
- bower install bootstrap --save
- add .gitignore
    - add node_components
    - add bower_components
- create [server.js](http://expressjs.com/starter/hello-world.html)
- npm install serve-index --save //to allow directory listing
- update server.js 
	```javascript
	var express = require('express');
	var serveIndex = require('serve-index')
	var app = express();

	//this will allow serving files in /bower_components at /bower_components
	app.use('/bower_components', express.static(__dirname + '/bower_components'));

	app.use(express.static('views')); //this will allow serving files in /views at /
	app.use('/views', express.static('views')); //this will allow serving files in /views at /views

	// Directory Listing 
	app.use('/views', serveIndex('views', {'icons': true}))


	// respond with "Hello World!" on the homepage
	app.get('/', function (req, res) {
	  res.send('Hello World!');
	});


	var server = app.listen(3000, function () {
	  var host = server.address().address;
	  var port = server.address().port;

	  console.log('Example app listening at http://%s:%s', host, port);
	});
	```

# HTML boilerplate with Bootstrap 3, jQuery, AngularJS from bower_components
	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Creating a directive</title>
		<!-- Bootstrap -->
		<link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
		<!-- Bootstrap Theme -->
		<link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
		<script src="/bower_components/angular/angular.min.js"></script>
	</head>
	<body>
		

		<!-- jQuery -->
		<script src="/bower_components/jquery/dist/jquery.min.js"></script>
		<!-- Bootstrap Javascript -->
		<script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	</body>
	</html>	
	```

# Tips
1. Sublime Text
	1. Create full HTML tempalte
		- Type ! and Tab or Type HTML:5 and Tab
