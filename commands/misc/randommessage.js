
let messages = [];
module.exports = {
	name: "randommessage",
	aliases: ["rm", "randmes"],
	description: "Sends a random message from a the discord",

	async execute(message, args) {
		if(messages.length < 1)
        {
            await fetchAllMessages(message, message.channel);
        }
        
        message.channel.send(messages[Math.floor(Math.random()*messages.length)].toString());
	},
};

async function fetchAllMessages(m, channel) {
    const channel = m.guild.channels.cache.get("<my-channel-id>");
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