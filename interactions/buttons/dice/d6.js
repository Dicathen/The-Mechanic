/**
 * @file Sample button interaction
 * @author Naman Vrati
 * @since 3.0.0
 */

module.exports = {
	id: "d6",

	/**
	 * @description Executes when the button with ID "sample" is clicked.
	 * @author Naman Vrati
	 * @param {import("discord.js").ButtonInteraction} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
		await interaction.reply({
			content: "You rolled a D6 and got a " + String(Math.random * 6 + 1) + "!",
		});
		return;
	},
};
