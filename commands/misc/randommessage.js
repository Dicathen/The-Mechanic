const DateGenerator = require('random-date-generator');
const EPOCH = 1420070400000;
module.exports = {
	name: "randommessage",
	aliases: ["rm", "randmes"],
	description: "Sends a random message from a the discord",

	async execute(message, args) {

        let startDate = new Date(2020, 10, 15);
        let endDate = new Date(); // should be current date

        let snow = fromDate(new Date(2020, 10, 16));
        console.log(snow.toString());
        message.channel.messages.fetch(snow.toString())
        .then(m => message.channel.send(m.content))
        .catch(console.error);
	},
};

function fromDate(date) {
    return BigInt(`0b${BigInt(date.getTime() - EPOCH) // Translate the date by the Discord epoch.
        .toString(2) // Convert the date to binary.
        .padStart(0x2a, "0") // Pad the start until the timestamp is the correct length.
        .padEnd(0x40, "0") // Pad the end until the snowflake is the correct length.
    }`);
}
