/* Get home page */
module.exports.about = function(req, res){
	res.render('generic-text', { title: 'About' });
};

/* Get information pae */
module.exports.information = function(req, res){
	res.render('generic', { title: 'Information' });
};