const { getPost, getImage} = require('random-reddit');

module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		const image = getImage('cats');
		message.channel.send({ content: image});
	},
};
