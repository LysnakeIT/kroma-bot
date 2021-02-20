const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "diag",
    category: "HS",
    description: "Returns latency and API ping",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("**Ce logiciel a été développé par une autre personne**\n\nIl suffit de télécharger ici https://userdiag.com/download puis lancer UserDiag\n\nUne fois lancé, une fenêtre s'affichera, il faudra cliquer sur `Diagnostic rapide`\nA la manière d'userbenchmark, plusieurs types de tests s'effectueront rapidement en 2-3min, et à la fin, une page web contenant votre `diag` (votre diagnostic) s'ouvrira.\nVous pourrez ainsi mettre le lien dans ce salon afin que l'on puisse vérifier qu'il n'y a pas d'erreur affichée, et que toutes les informations sont cohérentes.")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}