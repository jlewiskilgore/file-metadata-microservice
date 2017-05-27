var path = require('path');
var multer = require('multer');

var userFile = multer().single('selectedFile');

module.exports = function(app, env) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../../public/index.html'));
	});

	app.post('/getfilesize', userFile, function(req, res) {
		res.json({ "fileSize": req.file.size });
	});

	app.get('*', function(req, res) {
		res.redirect('/');
	});
};