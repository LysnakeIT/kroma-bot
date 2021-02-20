const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "fortnite",
    category: "HS",
    description: "Retourne les solutions pour FTN",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("```Pour les problèmes d'FPS sur Fortnite vous pouvez vérifier sur d'autres jeux plus ou moins gourmands si votre problème persiste, si c'est le cas vous pouvez faire un formatage propre via une clé usb, si non malgré qu'aucune solution miracle existe vous pouvez faire cela  : \n\n - DDU + installation offline de votre driver vidéo \n - Vérifier vos températures en jeu \n - Activer l'XMP dans votre BIOS \n - Réactiver l'HT/SMT dans votre BIOS \n - Activer le rendu multicoeur en jeu \n - Désactiver les rediffusions en jeu \n - Désactiver les Highlights NVIDIA en jeu \n - Vérifier les fichiers du jeu via le launcher \n - Faire tourner votre jeu en faible \n - Mettre le mode Faible Latence sur Activé ou Désactivé via le panneau de configuration NVIDIA.```")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}