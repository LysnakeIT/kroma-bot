const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "cg",
    category: "HS",
    description: "Retourne le graph répertoriant les cg",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			message.channel.send("https://cdn.discordapp.com/attachments/777115913031647232/784806336378568754/Ladder_-_GPU.png")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}