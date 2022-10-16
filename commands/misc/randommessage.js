import {Snowflake} from './Snowflake.ts';
let DateGenerator = require('random-date-generator');

module.exports = {
	name: "randommessage",
	aliases: ["rm", "randmes"],
	description: "Sends a random message from a the discord",

	async execute(message, args) {

        let startDate = new Date(2020, 10, 15);
        let endDate = new Date(); // should be current date
        console.log(endDate.toDateString())

        message.channel.messages.fetch(new Snowflake().fromDate(DateGenerator.getRandomDateInRange(startDate, endDate)))
        .then(m => message.channel.send(m.author.username + ": \"" + m.toString() + "\""))
        .catch(console.error);
	},
};

