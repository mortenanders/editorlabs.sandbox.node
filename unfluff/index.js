var url = "http://www.tipsbladet.dk/nyhed/rygter/torsdagens-rygteboers-verratti-og-agent-til-middag-med-messi";
var request = require('request');
var unfluff = require('unfluff');

request(url, function(err, response, body){
	console.log(JSON.stringify(unfluff(body), null, 2));
})