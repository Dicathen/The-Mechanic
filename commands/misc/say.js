module.exports = {
	name: "say",
	description: "Says something",

	execute(message, args) {
		message.channel.send({ content: "Pong. a nother test..." });
	},
};
