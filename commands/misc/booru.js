const boo = require('booru')

function booru(message, messageText) {
	var nsfw = false;
	if(message.channel.nsfw == true){
		nsfw = true;
	}
	let options = {
		imageOnly: true,
		allowNSFW: nsfw
	};
	try {
		const image = boo.random(messageText, options);
		if(image.over_18 && message.channel.nsfw == false) {
			return "";
		}
		else {
			return image;
		}
	}
	catch(err) {
		return "";
	}
}

module.exports = {
	name: "booru",
	aliases: ["b"],
	description: "Sends a random image from a specified booru",

	execute(message, args) {
		var messageText = "Use this command with the following\nSFW: e926, konan, safebooru, tbib\nNSFW: e621, hypnohub, danbooru, konac, yandere, gelbooru, rule34, xbooru, paheal, derpibooru, realbooru";
		if(args.length > 0) {
			var messageText = String(args[0]);
		}
		booru(message, messageText);
		if(message.channel.nsfw == true)
        {
            message.delete();
        }
	},
};