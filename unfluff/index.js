var urls = [];
urls.push("http://www.tipsbladet.dk/nyhed/rygter/torsdagens-rygteboers-verratti-og-agent-til-middag-med-messi");
urls.push("http://ekstrabladet.dk/sport/fodbold/dansk_fodbold/superligaen/fc_koebenhavn/dansk-klub-var-klar-til-at-koebe-okore-fri/6707874");
urls.push("http://www.bold.dk/fodbold/nyheder/avis-nicklas-p-i-dialog-med-mechelen/");

var request = require('request');
var unfluff = require('unfluff');
var async = require('async');

function parse(url, callback){
	request(url, function(err, response, body){
		callback(err, unfluff(body));
	})	
}

async.map(urls, parse, function(err, results){
	console.log(JSON.stringify(results, null, 2));
})
