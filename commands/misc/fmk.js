module.exports = {
	name: "fmk",

	/** You need to uncomment below properties if you need them. */
	//description: 'Ping!',
	//usage: 'put usage here',
	//permissions: 'SEND_MESSAGES',
	//guildOnly: true,

	execute(message, args) {
        var users = [0, 0, 0];
        users[0] = message.guild.members.cache.random().nickname;
        users[1] = message.guild.members.cache.random().nickname;
        users[2] = message.guild.members.cache.random().nickname;
		message.channel.send({ content: `${users[0]}` });
	},
};
