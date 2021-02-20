const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "navigateur",
    category: "HS",
    description: "Retourne un graph comparant différent nav",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("https://cdn.discordapp.com/attachments/549725542895845380/770316564012335164/Sans_titre.png")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}