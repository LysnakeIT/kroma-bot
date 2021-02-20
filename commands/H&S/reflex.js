const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "reflex",
    category: "HS",
    description: "Retourne un comparatif de l'option refelex",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("https://media.discordapp.net/attachments/764410598695895060/774995424217661460/ftn.PNG \n https://media.discordapp.net/attachments/764410598695895060/774995500876169226/Capture.PNG")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}