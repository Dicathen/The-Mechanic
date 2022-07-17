const boo = require('booru')

async function getBooru(message, site, term) {
	var image;
	try{
		boo.search(site, [term], { limit: 1, random: true }).then(
			posts => {
				if(posts[0] == undefined){
					return message.channel.send("No results found for " + term + " on " + site + " or another error has occured.");
				}
				image = posts[0].fileUrl;   //post.fileUrl, post.postView
			  	if((posts[0].booru.site.nsfw == true || posts[0].rating == 'e') && message.channel.nsfw == false){
					return message.channel.send("*This site or post is NSFW in an SFW channel. Try this command with the following:*\n**SFW:** e926, konan, safebooru\n**NSFW:** e621, hypnohub, danbooru, konac, yandere, gelbooru, rule34, xbooru, paheal, derpibooru, realbooru, tbib");
				}
				else{
					return message.channel.send(site + '\n' + term + '\n' + image);
				}
			},
		  )
	}
	catch(err){
		return message.channel.send("*This site does not exist or another issue has occurred. Try this command with the following:*\n**SFW:** e926, konan, safebooru\n**NSFW:** e621, hypnohub, danbooru, konac, yandere, gelbooru, rule34, xbooru, paheal, derpibooru, realbooru, tbib");
	}
}

module.exports = {
	name: "booru",
	aliases: ["b", "e926", "konan", "safebooru", "e621", "hypnohub", "danbooru", "konac", "yandere", "gelbooru", "rule34", "r34", "xbooru", "paheal", "derpibooru", "realbooru", "tbib"],
	description: "Sends a random image from a specified booru with the format: **booru <site> <term>**",

	execute(message, args) {
		var site = "safebooru";
		var term = "glaceon";
		if(args.length > 0) {
			site = String(args[0]);
			term = String(args[1]);
			if(args[0] != "b" || args[0] != "booru"){
				console.log(String(message.content.split(" ").substring(1)));
				site = String(message.content.split(" ")[1].substring(1));
				term = String(message.content.split(" ")[2]);
			}
			console.log(site, term);
		}
		getBooru(message, site, term);
		console.log(site, term);
		if(message.channel.nsfw == true){
			message.delete();
		}
	},
};