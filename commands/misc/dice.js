const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: "dice",
	description: "Roll a die",

	async execute(interaction, args) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('4')
					.setLabel('D4')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('6')
					.setLabel('D6')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('8')
					.setLabel('D8')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('10')
					.setLabel('D10')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('20')
					.setLabel('D20')
					.setStyle('PRIMARY')
			);
		await interaction.reply({ content: String(Math.random * Number(interaction.customID)), components: [row] });
	},
};
