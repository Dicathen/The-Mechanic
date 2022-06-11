const { getPost, getImage} = require('random-reddit');

async function redditImage() {
	const image = await getImage('cat');
	console.log(image);
	return image;
}

async function sendImage() {
	const image = await redditImage();
	console.log(image);
	return message.channel.send("GATO", { files: [image] });
}

module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		const image = redditImage();
		message.channel.send("GATO", { files: [image] });
		console.log(image);
	},
};