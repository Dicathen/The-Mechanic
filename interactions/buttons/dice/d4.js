/**
 * @file Sample button interaction
 * @author Naman Vrati
 * @since 3.0.0
 */

module.exports = {
	id: "d4",

	/**
	 * @description Executes when the button with ID "sample" is clicked.
	 * @author Naman Vrati
	 * @param {import("discord.js").ButtonInteraction} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
		await interaction.reply({
			content: "You rolled a D4 and got a " + String(Math.random * 4 + 1) + "!",
		});
		return;
	},
};
