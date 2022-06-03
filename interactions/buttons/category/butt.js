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
			x : snek.get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week').query({ limit: 800 }),
            allowed : message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18),
            randomnumber : Math.floor(Math.random() * allowed.length),
            embed : new Discord.RichEmbed().setColor(0x00A2E8).setTitle(allowed[randomnumber].data.title).setDescription("Posted by: " + allowed[randomnumber].data.author).setImage(allowed[randomnumber].data.url).addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments).setFooter("Memes provided by r/dankmemes"),
			content: embed,
		});
		return;
	},
};
