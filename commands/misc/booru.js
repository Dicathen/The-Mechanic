const boo = require('booru')

async function getBooru(message, site, term) {
	var image;
	try{
		boo.search('safebooru', ['glaceon'], { limit: 3, random: true }).then(
			posts => {
			  //for (let post of posts) console.log(post.fileUrl, post.postView)
			  image = posts[0];
			},
		  )
	}
	catch(err){
		return message.channel.send("*This site does not exist. Use this command with the following:*\n*SFW:** e926, konan, safebooru, tbib\n**NSFW:** e621, hypnohub, danbooru, konac, yandere, gelbooru, rule34, xbooru, paheal, derpibooru, realbooru*");
	}
	boo.search('safebooru', ['glaceon'], { limit: 3, random: true }).then(
		posts => {
		  //for (let post of posts) console.log(post.fileUrl, post.postView)
		  image = posts[0];
		  console.log(posts[0]);
		},
	  )
	console.log(image);
	if(image.booru.nsfw == true && message.channel.nsfw == false){
		return message.channel.send("*This site is NSFW. Use this command with the following:*\n**SFW:** e926, konan, safebooru, tbib\n**NSFW:** e621, hypnohub, danbooru, konac, yandere, gelbooru, rule34, xbooru, paheal, derpibooru, realbooru");
	}
	//const image = await website.search((term), {limit:2});
	return message.channel.send("image");
}

module.exports = {
	name: "booru",
	aliases: ["b"],
	description: "Sends a random image from a specified booru",

	execute(message, args) {
		var site = "safebooru";
		var term = "glaceon";
		if(args.length > 0) {
			site = String(args[0]);
			term = String(args[1]);
		}
		getBooru(message, site, term);
		//if(message.channel.nsfw == true)
        //{
        //    message.delete();
        //}
	},
};