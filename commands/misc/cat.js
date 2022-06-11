const { getPost, getImage} = require('random-reddit');

async function redditImage() {
	const image = await getImage('cat');
	return image;
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