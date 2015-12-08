/* Get home page */
module.exports.about = function(req, res){
	res.render('generic-text', { 
		title: 'About',
		content: 'Taxidermy post-ironic banjo, everyday carry brunch vegan food truck four dollar toast swag actually tumblr. Photo booth beard artisan tousled locavore, organic plaid four loko asymmetrical yuccie. 3 wolf moon crucifix pork belly sartorial beard. Whatever mixtape skateboard locavore, echo park fanny pack hoodie gastropub pickled trust fund venmo lo-fi lumbersexual. Hella single-origin coffee VHS, franzen blue bottle sriracha bushwick. Hoodie chartreuse crucifix viral art party, heirloom mustache vegan fixie venmo hashtag mumblecore meditation authentic keffiyeh. Art party kitsch cardigan, cliche lomo irony pitchfork PBR&B photo booth.'
  });
};

/* Get information pae */
module.exports.information = function(req, res){
	res.render('generic', { title: 'Information' });
};