module.exports = {
	name: "say",
	description: "Says something",

	execute(message, args) {
		message.channel.messages.fetch({ limit: 1 }).then(messages => {
			let lastMessage = messages.first();
			
			if (!lastMessage.author.bot) {
			  lastMessage.delete();
			}
		  });
		message.channel.send({ content: toString(args)});
	},
};
