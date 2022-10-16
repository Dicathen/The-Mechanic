const fs = require('fs');
module.exports = {
	name: "randommessage",
	aliases: ["rm", "randmes"],
	description: "Sends a random message from a the discord",

	async execute(message, args) {
        message.channel.send("Trying to fetch all messages please don't send me another command.");

        var file = fs.createWriteStream('messages.txt')
        file.on('error', function(err) { /* error handling */ });
        await message.channel.messages.fetch({ limit: 10 }).then(messages => {
            messages.forEach(function(m) { 
                file.write(m.author.username + ": \"" + m.toString() + "\"");
            });
        })

        arr.forEach(function(v) { file.write(v.join(', ') + '\n'); });
        file.end();
        
        //return message.channel.send("Message: " + messages[Math.floor(Math.random()*messages.length)].toString());
	},
};
