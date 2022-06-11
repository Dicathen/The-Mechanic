const { getPost, getImage} = require('random-reddit');
const image = await getImage('cats');

module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		message.channel.send("GATO", { files: [image] });
		console.log(image);
	},
};
