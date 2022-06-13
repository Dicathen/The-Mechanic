const { getPost, getImage } = require('random-reddit');

async function redditPost(message, messageText) {
	var nsfw = false;
	if(message.channel.nsfw == true){
		nsfw = true;
	}
	let options = {
		imageOnly: true,
		allowNSFW: nsfw
	};
	const image = getImage(messageText, options).catch(err => { console.log(err); });
	//const image = await getPost(messageText, options);
	if(image == undefined) {
		return "";
	}
	if(image.over_18 && message.channel.nsfw == false) {
		return "";
	}
	else {
		return image;
	}
}

async function sendImage(message, messageText) {
	const image = await redditPost(message, messageText);
	if(image == "") {
		return message.channel.send("This subreddit does not exist or is NSFW.");
	}
	else {
		return message.channel.send(image);
	}
}

module.exports = {
	name: "reddit",
	description: "Sends a random image from a specified subreddit",

	execute(message, args) {
		var messageText = "cats";
		if(args.length > 0) {
			var messageText = String(args[0]);
		}
		sendImage(message, messageText);
	},
};