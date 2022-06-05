//const RedditImage = require('reddit-random-image');

module.exports = {
	import: 'reddit-random-image',
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		const image = search('CatGifs');
		message.channel.send({ content: image});
	},
};
