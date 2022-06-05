module.exports = {
	name: "say",
	description: "Says something",

	execute(message, messageText) {
		channel.messages.fetch({ limit: 1 }).then(messages => {
			let lastMessage = messages.first();
			
			if (!lastMessage.author.bot) {
			  lastMessage.delete();
			}
		  });
		message.channel.send({ content: messageText + " "});
	},
};
