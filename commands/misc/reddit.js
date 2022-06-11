const { getImage } = require('random-reddit');

let options = {
	imageOnly: true,
	allowNSFW: false
 };

async function redditImage(messageText) {
	const image = await getImage(messageText, options);
	if(image.over_18) {
		return "This image is NSFW.";
	}
	return image;
}

async function sendImage(message, messageText) {
	const image = await redditImage(messageText);
	if(image.length > 0) {
		return message.channel.send(image);
	}
	return message.channel.send("This subreddit does not exist.");
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