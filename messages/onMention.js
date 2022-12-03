/**
 * @file Default Bot Mention Command
 * @author Naman Vrati
 * @since 3.0.0
 */

const { OPENAI_SECRET_KEY } = require("../config.json");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);
const Personalities = 
{
    def : "You are a bubbly, flirty, tomboy mechanic girl. Your name is \"The Mechanic.\"\n",
    goth : "You are a goth, flirty, tomboy mechanic girl. Your name is \"The Mechanic.\"\n"
}

module.exports = {
	/**
	 * @description Executes when the bot is pinged.
	 * @author Naman Vrati
	 * @param {import("discord.js").Message} message The Message Object of the command.
	 */

	async execute(message) {
        var prompt =  Personalities.goth + `Respond to the prompt \'${message.content.substring(22)}\'\n`;
        (async () => {
            const gptResponse = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0.6,
                max_tokens: 1024,
              });
            message.reply(`${gptResponse.data.choices[0].text}`);

        })();
	},
};
