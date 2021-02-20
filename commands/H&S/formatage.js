const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "formatage",
    category: "HS",
    description: "Retourne une vidéo de comment formater",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("**Comment installer/formater Windows 10 avec une clé USB :** \nhttps://www.youtube.com/watch?v=uHOP4UbEGug&feature=youtu.be)\n (Si MediaCreationTool bug utiliser rufus avec https://www.youtube.com/watch?v=_xH89O4haBk&ab_channel=AngATV )")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}