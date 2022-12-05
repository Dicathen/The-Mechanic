const { DREAMSTUDIO_API_KEY } = require("../../../config.json");
const { generate   } = require('stability-client')
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
        console.log(message.content);
        const api = generate({
            prompt: message.content,
            apiKey: DREAMSTUDIO_API_KEY,
            host: 'https://grpc.stability.ai:443',
            engine: 'stable-diffusion-v1',
            width: 512,
            height: 512,
            diffusion:'k_lms',
            steps: 50,
            cfgScale: 7,
            samples: 1
        })
          
        api.on('image', ({ buffer, filePath }) => {
            console.log('Image', buffer, filePath)
        })
          
        api.on('end', (data) => {
            console.log('Generating Complete', data)
        })
        
		await interaction.reply({ content: 'Working on it!', ephemeral: true });
		return;
	},
};
