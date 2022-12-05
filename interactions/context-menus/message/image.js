const { DREAMSTUDIO_API_KEY } = require("../../../config.json");
const { generate   } = require('stability-client')
const fs = require('fs');
const {MessageAttachment, MessageEmbed} = require("discord.js");
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
module.exports = {
	data: {
		name: "Generate Image",
		type: 3, // 3 is for message context menus
	},

	/**
	 * @param {import("discord.js").ContextMenuInteraction} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
        var message = await interaction.channel.messages.fetch(interaction.targetId);
        message.react('770876050318032896');
        const api = generate({
            prompt: message.content,
            apiKey: DREAMSTUDIO_API_KEY,
            host: 'https://grpc.stability.ai:443',
            engine: 'stable-diffusion-v1',
            width: 512,
            height: 512,
            diffusion:'k_lms',
            outDir: process.cwd() + '/images/' + uuidv4(),
            steps: 20,
            cfgScale: 7,
            samples: 1
        })
          
        api.on('image', ({ buffer, filePath }) => {
            filePath = "./" + filePath.substring(filePath.search("images"));
            //const attachment = new MessageAttachment("./" + filePath);
            //const img = `attachment://${filePath}`;
            //const embed = new MessageEmbed().setTitle(message.content).setImage(img);
            //interaction.followUp({content: `\"${message.content}\"\n`, files: filePath});
            
            console.log(filePath);
            message.channel.send("Testing message.", { files: [filePath] });

            //fs.unlink(filePath, callbackFunction)
        })
          
        api.on('end', (data) => {
            //console.log('Generating Complete', data)
        })
        
		await interaction.reply({ content: 'Working on it!', ephemeral: true });
		return;
	},
};
