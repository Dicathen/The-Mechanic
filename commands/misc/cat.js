const { search } = require('reddit-random-image');

module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		const image = search('CatGifs');
		message.channel.send({ content: image});
	},
};
