var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var ARTICLES_FILE = path.join(__dirname, 'articles.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

// viewed at http://localhost:3000
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/api/articles', function(req, res) {
	fs.readFile(ARTICLES_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		var articles = JSON.parse(data);

		if(req.query.id) {
			var id = req.query.id;
			var article = articles.find(function(article) {
				return article.id === id;
			});
			res.json(article);
		}else {
			res.json(articles);
		}
	});
});

app.post('/api/articles', function(req, res) {
	console.log('req.query', req.query);

	fs.readFile(ARTICLES_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		var articles = JSON.parse(data);

		var newArticle = {
			id: (Date.now()).toString(),
			date: Date.now(),
			title: req.body.title,
			body: req.body.body
		};
		articles.push(newArticle);

		fs.writeFile(ARTICLES_FILE, JSON.stringify(articles, null, 4), function(err) {
			if (err) {
				console.error(err);
				process.exit(1);
			}
			res.json(newArticle);
		});
	});
});

app.put('/api/articles', function(req, res) {

	fs.readFile(ARTICLES_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		var articles = JSON.parse(data);

		var article = articles.find((article) => {
			return article.id === req.body.id;
		});
		article.title = req.body.title;
		article.body = req.body.body;

		fs.writeFile(ARTICLES_FILE, JSON.stringify(articles, null, 4), function(err) {
			if (err) {
				console.error(err);
				process.exit(1);
			}
			res.json(article);
		});
	});
});

app.delete('/api/articles', function(req, res) {

	fs.readFile(ARTICLES_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		var articles = JSON.parse(data);

		articles.some((article, i) => {
			if(article.id === req.body.id) articles.splice(i,1);
		});

		fs.writeFile(ARTICLES_FILE, JSON.stringify(articles, null, 4), function(err) {
			if (err) {
				console.error(err);
				process.exit(1);
			}
			res.json(articles);
		});
	});
});


app.listen(app.get('port'), function() {
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});