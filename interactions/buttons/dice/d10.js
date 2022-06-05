module.exports = {
	id: "d10",

	async execute(interaction) {
		var roll = Math.floor(Math.random() * 10) + 1;
		await interaction.reply({
			content: "You rolled a D10 and got a **" + String(roll) + "**!",
		});
		return;
	},
};
