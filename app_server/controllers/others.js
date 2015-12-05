/* Get home page */
module.exports.about = function(req, res){
	res.render('index', { title: 'About' });
};

/* Get information pae */
module.exports.information = function(req, res){
	res.render('index', { title: 'Information' });
};