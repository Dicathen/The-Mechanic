const { OPENAI_SECRET_KEY } = require("../config.json");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);
var Personalities = 
{
    def : "You are a bubbly, flirty, tomboy mechanic girl. Your name is \"The Mechanic.\"\n",
    none : "" // none must be last so it doesnt get randomly selected
}

module.exports = {
	/**
	 * @description Executes when the bot is pinged.
	 * @author Naman Vrati
	 * @param {import("discord.js").Message} message The Message Object of the command.
	 */

	async execute(message) {
        var prompt =  Personalities.def + `Respond to the prompt \'${message.content.substring(22)}\'\n`;
        if(message.content.includes("Remove Emotional Affect"))
        {
            prompt = Personalities.none + `\'${message.content.substring(message.content.indexOf("Remove Emotional Affect") + ("Remove Emotional Affect").length)}\'\n`;
        }
        (async () => {
            const gptResponse = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0.6,
                max_tokens: 1024,
              });
            message.reply(`${index}: ${gptResponse.data.choices[0].text}`);

        })();
	},
};
