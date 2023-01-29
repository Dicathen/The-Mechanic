module.exports = {
	name: "jayden",
	description: "Gets Jayden's impression of the server",

	execute(message, args) {
		const voiceChannels = newMember.guild.channels.filter(c => c.type === 'voice');
		let count = 0;
		for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
		var messageText = "";
		var date = new Date().getDay();
		var time = new Date().getHours();
		var tod = "";
		if(time >= 0 && time < 12) {
			tod = "morning";
		}
		else if(time >= 12 && time < 18) {
			tod = "afternoon";
		}
		else {
			tod = "evening";
		}

		if(count <= 4) {
			messageText = "Damn, chat's really dead on a " + date + " " + tod + " huh?";
		}
		else if(count > 4 && count <= 8) {
			messageText = "Chat's really popping off on a " + date + " " + tod + ".";
		}
		else {
			messageText = "Wowzers! Chat's really super EXTRA popping off on a " + date + " " + tod + "!";
		}
		message.channel.send({ content: messageText});
	},
};
