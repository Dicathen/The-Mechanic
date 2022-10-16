const fs = require('fs');
require('discord-fetch-messages');
const fetcher = new Fetcher(client);
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
        await fetcher.fetchChannel(message.channel).then(messages => {
            messages.forEach(function(m) { 
                file.write(m.id + "\n");
            });

            message.channel.send("Done.")
        })

        file.end();
        
        //return message.channel.send("Message: " + messages[Math.floor(Math.random()*messages.length)].toString());
	},
};

fetcher.on('fetchChannel', async channel => {
	await message.channel.send(`Fetching <#${channel.id}>.`);
});