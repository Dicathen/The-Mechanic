const ImageSearch = require('free-google-image-search');

module.exports = {
	name: "cat",
	description: "Cat picture",

	execute(message, args) {
		GoogleImageSearch.searchImage("cat")
		.then((res) => {
    		console.log(res); // This will return array of image URLs
		})
		message.channel.send({ content: "cat"});
	},
};
