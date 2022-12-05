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
        const api = generate({
            prompt: message.content,
            apiKey: DREAMSTUDIO_API_KEY,
            host: 'https://grpc.stability.ai:443',
            engine: 'stable-diffusion-v2',
            width: 512,
            height: 512,
            diffusion:'k_lms',
            outDir: process.cwd() + '/images/' + uuidv4(),
            steps: 20,
            cfgScale: 7,
            samples: 1
        })
          
        api.on('image', ({ buffer, filePath }) => {
            filePath = filePath.substring(filePath.search("images"));
            console.log('Image', filePath)
            const attachment = new MessageAttachment(filePath);
            const img = `attachment://${filePath}`;
            const embed = new MessageEmbed().setTitle(message.content).setThumbnail(img);
            interaction.followUp({embeds: [embed], attachments: attachment});
            //fs.unlink(filePath, callbackFunction)
        })
          
        api.on('end', (data) => {
            //console.log('Generating Complete', data)
        })
        
		await interaction.reply({ content: 'Working on it!', ephemeral: true });
		return;
	},
};
