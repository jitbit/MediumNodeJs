var request = require('request');

var token = 'XXXX'; //get one at https://medium.com/me/settings scroll to the very end of the page and 'add' integration token
var userId = 'YYYY'; //open this link https://api.medium.com/v1/me?accessToken=XXXX in your browser and get your userid there

var post_data = {
	'title' : 'Post title',
	'contentFormat' : 'html',
	'content': '<p>Test HTML post</p>',
	'canonicalUrl': 'https://Original-Url', //this one is important to avoid SEO issues
	'publishStatus': 'draft'
};

console.log(post_data);

console.log('Sending the post request...');

// Set up the request
request({
	url: 'https://api.medium.com/v1/users/' + userId + '/posts',
	method: 'POST',
	json: true,
	headers: {
		'Authorization': 'Bearer ' + token,
        	"content-type": "application/json"
    	},
	body: post_data
	},
	function (error, response, body) {
		console.log(body);
		console.log(error);
	});
