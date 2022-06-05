module.exports = {
	id: "d6",

	async execute(interaction) {
		var roll = Math.floor(Math.random() * 6) + 1;
		await interaction.reply({
			content: "You rolled a D6 and got a **" + String(roll) + "**!",
		});
		return;
	},
};
