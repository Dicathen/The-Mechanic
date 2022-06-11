const { getPost, getImage} = require('random-reddit');

module.exports = {
	name: "cat",
	description: "Cat picture",
	image: await getImage('cats'),

	execute(message, args) {
		message.channel.send("GATO", { files: [image] });
		console.log(image);
	},
};
