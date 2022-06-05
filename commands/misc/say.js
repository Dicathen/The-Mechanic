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
		  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
		message.channel.send({ content: args});
	},
};
