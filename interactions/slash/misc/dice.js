/**
 * @file Sample help command with slash command.
 * @author Naman Vrati
 * @author Thomas Fournier <thomas@artivain.com>
 * @since 3.0.0
 * @version 3.1.0
 */

// Deconstructed the constants we need in this file.

const { MessageEmbed, Collection } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	// The data needed to register slash commands to Discord.
	data: new SlashCommandBuilder()
		.setName("dice")
		.setDescription(
			"Roll a die"
		),

	async execute(interaction, args) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('d4')
					.setLabel('D4')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('d6')
					.setLabel('D6')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('d8')
					.setLabel('D8')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('d10')
					.setLabel('D10')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('d20')
					.setLabel('D20')
					.setStyle('PRIMARY')
			);
		await interaction.reply({ content: "Please a die from the selection below.", components: [row] });
	},
};
