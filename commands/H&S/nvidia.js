const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "nvidia",
    category: "HS",
    description: "Retourne les paramètres du panneau nvidia",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			message.channel.send("https://media.discordapp.net/attachments/777115913031647232/795699170618638357/1.png \n https://media.discordapp.net/attachments/777115913031647232/795699172518395924/2.png \n https://media.discordapp.net/attachments/777115913031647232/795699188813004830/3.png \n https://media.discordapp.net/attachments/777115913031647232/795699204819255376/4.PNG \n https://media.discordapp.net/attachments/777115913031647232/795699217834049587/5.PNG")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}