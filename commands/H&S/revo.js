const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "revo",
    category: "HS",
    description: "Retourne une vidéo pour utiliser RevoUninstaller",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("https://www.youtube.com/watch?v=F_UY7LA8MOg&t=226s&ab_channel=AngATV")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}