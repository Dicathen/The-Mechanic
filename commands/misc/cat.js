function image(message){
    var options = {
        url: 'http://results.dogpile.com/serp?qc=images&q=' + 'cat',   // Cat is placeholder for variable in search
        method: 'GET',
        headers: {
            'Accept': 'text/html',
            'User-Agent': 'Chrome'
        }
        
    };
    request(options, function(error, response, responseBody){
        if (error){
            return;
        }
        $ = cheerio.load(responseBody);
        var links = $('.image a.link');
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));
        console.log(urls);
        if (!urls.length){
            return;
        }
        message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    });
}

module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		
		message.channel.send({ content: image("cat")});
	},
};
