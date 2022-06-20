const boo = require('booru')

function getBooru(message, site, term) {
	//const sb = Booru.forSite('sb')
	if(boo.sites.has(site) == false || (boo.sites.get(site).nsfw == true && message.channel.nsfw == false)) {
		return message.channel.send("This site does not exist or is NSFW. Use this command with the following\nSFW: e926, konan, safebooru, tbib\nNSFW: e621, hypnohub, danbooru, konac, yandere, gelbooru, rule34, xbooru, paheal, derpibooru, realbooru");
	}
	boo.search(site, [term], { limit: 3, random: true }).then(
		posts => {
			return message.channel.send(posts[0].fileUrl)
		  	//for (let post of posts) console.log(post.fileUrl, post.postView)
		},
	)
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
		if(message.channel.nsfw == true)
        {
            message.delete();
        }
	},
};