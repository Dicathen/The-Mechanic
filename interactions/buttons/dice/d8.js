/**
 * @file Sample button interaction
 * @author Naman Vrati
 * @since 3.0.0
 */

module.exports = {
	id: "d8",

	/**
	 * @description Executes when the button with ID "sample" is clicked.
	 * @author Naman Vrati
	 * @param {import("discord.js").ButtonInteraction} interaction The Interaction Object of the command.
	 */

	async execute(interaction) {
		var roll = Math.floor(Math.random() * 8) + 1;
		await interaction.reply({
			content: "You rolled a D8 and got a " + String(roll) + "!",
		});
		return;
	},
};
