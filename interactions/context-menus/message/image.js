import { generate } from 'stability-ts'
const { DREAMSTUDIO_API_KEY } = require("../config.json");
module.exports = {
	data: {
		name: "messageBlows",
		type: 3, // 3 is for message context menus
	},

	/**
	 * @param {import("discord.js").ContextMenuInteraction} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
        const api = generate({
            prompt: 'A Stunning House',
            apiKey: DREAMSTUDIO_API_KEY,
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
