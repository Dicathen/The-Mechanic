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
		  const messageText = args.slice(config.prefix.length).trim().split(/ +/g);
		message.channel.send({ content: messageText});
	},
};
