const { getPost, getImage} = require('random-reddit');

module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		const image = await getImage('cats');
		message.channel.send("GATO", { files: [image] });
		console.log(image);
	},
};
