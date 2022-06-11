const { getPost, getImage} = require('random-reddit');

module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		const image = await Promise.resolve(getImage('cat'));
		message.channel.send("GATO", { files: [image] });
		console.log(image);
	},
};