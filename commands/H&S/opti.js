const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "opti",
    category: "HS",
    description: "Retourne une vidéo pour optimiser proprement son Windows",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			message.channel.send("**Le guide à suivre :** https://lysnakeit.github.io/Guide \n**La vidéo de Lysnake : ** https://youtu.be/4EivQuzGXF4 ")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}