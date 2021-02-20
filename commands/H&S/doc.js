const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "doc",
    category: "HS",
    description: "Retourne le doc répertoriant les best boitiers et refroidissements",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			message.channel.send("Voici un doc regroupant la liste des boitiers, refroidissement et écrans qui sont recommandés. \n https://docs.google.com/spreadsheets/d/e/2PACX-1vSA8AE88v4BP-43UjynJLTDAsNA9r50pZkHCsX2jT4x59AssLweT09s6DoIG9vEAgnE25mn3t3tWZ20/pubhtml")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}