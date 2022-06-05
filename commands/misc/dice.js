const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: "dice",
	description: "Roll a die",

	async execute(message, args) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	},
};
