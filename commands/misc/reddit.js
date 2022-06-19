const { getPost } = require('random-reddit');
const { MessageEmbed } = require('discord.js');
async function redditPost(message, messageText) {
	var nsfw = false;
	if(message.channel.nsfw == true){
		nsfw = true;
	}
	let options = {
		imageOnly: true,
		allowNSFW: nsfw
	};
	try {
		const image = await getPost(messageText, options);
		if(image.over_18 && message.channel.nsfw == false) {
			return "";
		}
		else {
			return image.url;
		}
	}
	catch(err) {
		return "";
	}
}

async function sendImage(message, messageText) {
	const image = await redditPost(message, messageText);
	if(image == "") {
		return message.channel.send("This subreddit does not exist or is NSFW.");
	}
	else {
        if(message.channel.nsfw == true)
        {
            message.delete();
        }
        const redditEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(messageText)
            .setURL(image)
            .setImage(image)

		return message.channel.send({ embeds: [redditEmbed] });
	}
}

module.exports = {
	name: "reddit",
	aliases: ["r"],
	description: "Sends a random image from a specified subreddit",

	execute(message, args) {
		var messageText = "cats";
		if(args.length > 0) {
			var messageText = String(args[0]);
		}
		sendImage(message, messageText);
	},
};