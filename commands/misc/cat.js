const { getPost, getImage} = require('random-reddit');

async function redditImage() {
	const post = await getPost('cat');
	const image = await getImage(post.url);
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