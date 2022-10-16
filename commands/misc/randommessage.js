const fs = require('fs');
const fetchAll = require('discord-fetch-all');
 
let insearch = false;
module.exports = {
	name: "randommessage",
	aliases: ["rm", "randmes"],
	description: "Sends a random message from a the discord",

	async execute(message, args) {


        if(insearch)
        {
            return message.channel.send("Bro I am literally storing all 360000+ messages rn stop");
        }

        message.channel.send("Trying to fetch all messages please don't run this command again.");

        var file = fs.createWriteStream('messages.txt')
        file.on('error', function(err) { /* error handling */ });

        insearch = true;

        // First parameter needs to be a discord.js channel object
        // Second parameter is a optional set of options.
        await fetchAll.messages(channel, {
            reverseArray: false, // Reverse the returned array
            userOnly: true, // Only return messages by users
            botOnly: false, // Only return messages by bots
            pinnedOnly: false, // Only returned pinned messages
        }).then(messages => {
            messages.forEach(function(m) { 
                file.write(m.id + "\n");
            });

            message.channel.send("Done.")
        });

        file.end();
        
        //return message.channel.send("Message: " + messages[Math.floor(Math.random()*messages.length)].toString());
	},
};
