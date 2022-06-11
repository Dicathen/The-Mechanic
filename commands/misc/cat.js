const { getPost, getImage} = require('random-reddit');

async function redditImage() {
	const image = await getImage('cat');
	console.log(image);
	return image;
}

async function sendImage(message) {
	const image = await redditImage();
	console.log(image);
	return message.channel.send(image);
}

module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		sendImage(message);
	},
};