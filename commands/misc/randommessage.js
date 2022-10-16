
module.exports = {
	name: "randommessage",
	aliases: ["rm", "randmes"],
	description: "Sends a random message from a the discord",

	async execute(message, args) {
        //new Date(Random(2020, 2022), Random(1, new Date().getMonth()), Random(1, 29), Random(1, 24), Random(1, 60), Random(1, 60), Random(1, 60))
        let snow = new Snowflake(new Date(2022, 10, 14));
        console.log(snow.toString());

        let messages = Array.from((await message.channel.messages.fetch({
            limit: 100,
            before: snow.toString()
        }, false)).values());

        let m = messages[Random(0, messages.length)];
        return message.channel.send(m.author.username + ": \"" + m.content + "\"");
	},
};

function Random(min, max)
{
    return Math.floor(Math.random() * max) + min;
}

class Snowflake {
	static EPOCH = 1420070400000; // First second of 2015.

	static BITS = {
		TIMESTAMP: 42,
		WORKER: 5,
		PROCESS: 5,
		INCREMENT: 12
	};

	static #dateToSnowflake = (date) => {
			let translatedDate = BigInt(date.getTime() - Snowflake.EPOCH);

			// Convert date to binary.
			let output = '';
			while (translatedDate > 0) {
				output = `${translatedDate % 2n}${output}`;
				translatedDate /= 2n;
			}

			// Fill 0s to make 64-bit
			while (output.length < Snowflake.BITS.TIMESTAMP) {
				output = `0${output}`;
			}
			while (output.length < Object.keys(Snowflake.BITS)
				   .reduce((a, c) => a + parseInt(Snowflake.BITS[c] || 0), 0)) {
				output += '0';
			}

			return BigInt(`0b${output}`);
	};

	#value; // BigInt representation of Snowflake.

	constructor(value = new Date()) {
		if (
			typeof value == 'number'
			|| typeof value == 'bigint'
			|| typeof value == 'string' && !isNaN(parseInt(value))
		) {
			this.#value = BigInt(value);
		} else if (value instanceof Date) {
			this.#value = Snowflake.#dateToSnowflake(value);
		} else {
			throw new Error(`Cannot create a Snowflake from supplied value (${value}).`);
		}
	}

	get binary() {
		let decimal = this.#value;
		let binary = '';

		// Convert to binary.
		while (decimal > 0) {
			binary = `${decimal % 2n}${binary}`;
			decimal /= 2n;
		}

		// Fill 0s to make 64-bit.
		while (binary.length < Object.keys(Snowflake.BITS)
			   .reduce((a, c) => a + parseInt(Snowflake.BITS[c] || 0), 0)) {
			binary = `0${binary}`;
		}

		return binary;
	}

	get timestamp() {
		return new Date(parseInt(
			this.binary.substring(
				0,
				
				Snowflake.BITS.TIMESTAMP
			), 2) + Snowflake.EPOCH);
	}

	get worker() {
		return parseInt(
			this.binary.substring(
				Snowflake.BITS.TIMESTAMP,
				
				Snowflake.BITS.TIMESTAMP +
				Snowflake.BITS.WORKER
			), 2);
	}

	get process() {
		return parseInt(
			this.binary.substring(
				Snowflake.BITS.TIMESTAMP +
				Snowflake.BITS.WORKER,
				
				Snowflake.BITS.TIMESTAMP +
				Snowflake.BITS.WORKER +
				Snowflake.BITS.PROCESS
			), 2);
	}

	get increment() {
		return parseInt(
			this.binary.substring(
				Snowflake.BITS.TIMESTAMP +
				Snowflake.BITS.WORKER +
				Snowflake.BITS.PROCESS
			), 2);
	}

	toString() {
		return `${this.#value}`;
	}
}