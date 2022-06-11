const { getImage } = require('random-reddit');

async function redditImage(messageText) {
	if(getImage(messageText) === null) {
		return "No image found";
	}
	const image = await getImage(messageText);
	return image;
}

async function sendImage(message, messageText) {
	const image = await redditImage(messageText);
	return message.channel.send(image);
}

module.exports = {
	name: "reddit",
	description: "Sends a random image from a specified subreddit",

	execute(message, args) {
		var messageText = String(args[0]);
		console.log(messageText);
		sendImage(message, messageText);
	},
};