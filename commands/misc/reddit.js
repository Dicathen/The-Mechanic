const { getImage } = require('random-reddit');

async function redditImage(messageText) {
	if(getImage(messageText) === undefined) {
		console.log("No image");
		return "No image found";
	}
	else {
		const image = await getImage(messageText);
		console.log(image);
		return image;
	}
}

async function sendImage(message, messageText) {
	const image = await redditImage(messageText);
	if(image.length > 0) {
		return message.channel.send(image);
	}
	return message.channel.send("THERE WAS AN ERROR.");
}

module.exports = {
	name: "reddit",
	description: "Sends a random image from a specified subreddit",

	execute(message, args) {
		var messageText = "cats";
		if(args.length > 0) {
			var messageText = String(args[0]);
		}
		console.log(messageText);
		sendImage(message, messageText);
	},
};