module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		message.channel.send({ content: "cat"});
	},
};
