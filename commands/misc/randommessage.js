const fs = require('fs');
module.exports = {
	name: "randommessage",
	aliases: ["rm", "randmes"],
	description: "Sends a random message from a the discord",

	async execute(message, args) {
        message.channel.send("Trying to fetch all messages please don't send me another command.");

        const channelMessages = await message.channel.messages.fetch({ limit: 10 }).then(() => {
            fs.writeFile('messages.txt', channelMessages, err => {
                if (err) {
                  console.error(err);
                }
              });
        })
        
        //return message.channel.send("Message: " + messages[Math.floor(Math.random()*messages.length)].toString());
	},
};
