const { getPost } = require('random-reddit');

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
            console.log("--------------------------------------------")
            console.log(image)
			return image;
		}
	}
	catch(err) {
		return "";
	}
    
}

async function sendImage(message, messageText) {
	const image = await redditPost(message, messageText);
	if(image.url == "" || image === undefined) {
		return message.channel.send("This subreddit does not exist or is NSFW.");
	}
	else {
        if(message.channel.nsfw == true)
        {
            message.delete();
        }

        if(image.is_video == true)
        {
            return message.channel.send(`https://reddit.com${image.permalink}`);
        }
        else
        {
            return message.channel.send(messageText + " \n" + image.url);
        }
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