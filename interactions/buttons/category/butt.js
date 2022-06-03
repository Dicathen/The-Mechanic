/**
 * @file Butt button interaction
 * @author Ty
 * @since 3.0.0
 */

module.exports = {
	id: "butt",

	/**
	 * @description Executes when the button with ID "butt" is clicked.
	 * @author Ty
	 * @param {import("discord.js").ButtonInteraction} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
		await interaction.reply({
			content: Math.random() > 0.5 ? ":eggplant:" : ":eggplant:"
		});
		return;
	},
};
