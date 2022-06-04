module.exports = {
	name: "say",
	description: "Says something",

	execute(message, messageText) {
		message.channel.send({ content: messageText + " "});
	},
};
