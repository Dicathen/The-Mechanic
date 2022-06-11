const { getPost } = require('random-reddit');

async function redditPost(message, messageText) {
	const nsfw = false;
	console.log(message.channel.nsfw);
	if(message.channel.nsfw){
		nsfw = true;
	}
	let options = {
		imageOnly: true,
		allowNSFW: nsfw
	 };
	const image = await getPost(messageText, options);
	console.log(image.url_overridden_by_destination);
	return image.url_overridden_by_destination;
}

async function sendImage(message, messageText) {
	const image = await redditPost(message, messageText);
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