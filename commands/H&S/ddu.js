const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "ddu",
    category: "HS",
    description: "Retourne une vidéo pour DDU son driver cg",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("https://www.youtube.com/watch?v=G8AASDve2UM&ab_channel=AngATV")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}