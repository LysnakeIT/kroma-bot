const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "cpu",
    category: "HS",
    description: "Retourne le graph répertoriant les cpu",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			message.channel.send("https://cdn.discordapp.com/attachments/764411711801131049/775822644858716160/Capture.png")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}