const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "obs",
    category: "HS",
    description: "Retourne une vidéo pour paramétrer obs pour stream et rec",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("Voici une vidéo vulgarisant les **paramètres** pour **STREAM** et **RECORD** avec **OBS**\nRegardez la description de la vidéo (Vers Info de Capet) pour avoir plus de détails.\nhttps://youtu.be/7m7ci0x_l38")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}