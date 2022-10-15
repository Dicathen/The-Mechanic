
let messages = [];
let lookingForMessages = false;
module.exports = {
	name: "randommessage",
	aliases: ["rm", "randmes"],
	description: "Sends a random message from a the discord",

	async execute(message, args) {
        if(lookingForMessages)
        {
            return message.reply("I am looking for messages.");
        }

        message.channel.send("Trying to fetch all messages please don't send me another command.");
		if(messages.length < 1)
        {
            await module.exports.fetchAllMessages(message.channel);
            lookingForMessages = false;
        }
        
        return message.channel.send("Message: " + messages[Math.floor(Math.random()*messages.length)].toString());
	},
    lookForMessages()
    {
        lookingForMessages = true;
    },
    doneLookingForMessages()
    {
        lookingForMessages = false;
    }
};
