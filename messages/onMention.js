/**
 * @file Default Bot Mention Command
 * @author Naman Vrati
 * @since 3.0.0
 */

const { prefix, OPENAI_SECRET_KEY } = require("../config.json");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = {
	/**
	 * @description Executes when the bot is pinged.
	 * @author Naman Vrati
	 * @param {import("discord.js").Message} message The Message Object of the command.
	 */

	async execute(message) {
        var prompt = message.content.substring(22);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 7,
          });
        
		return message.channel.send(response);
	},
};
