
let messages = [];
module.exports = {
	name: "randommessage",
	aliases: ["rm", "randmes"],
	description: "Sends a random message from a the discord",

	async execute(message, args) {
        message.channel.send("Trying to fetch all messages please don't send me another command.");
		if(messages.length < 1)
        {
            await fetchAllMessages(message.channel);
        }
        
        message.channel.send("Message: " + messages[Math.floor(Math.random()*messages.length)].toString());
	},
};

async function fetchAllMessages(channel) {
    messages = [];
  
    // Create message pointer
    let message = await channel.messages
      .fetch({ limit: 1 })
      .then(messagePage => (messagePage.size === 1 ? messagePage.at(0) : null));
  
    while (message) {
      await channel.messages
        .fetch({ limit: 100, before: message.id })
        .then(messagePage => {
          messagePage.forEach(msg => messages.push(msg));
  
          // Update our message pointer to be last message in page of messages
          message = 0 < messagePage.size ? messagePage.at(messagePage.size - 1) : null;
        });
    }
}