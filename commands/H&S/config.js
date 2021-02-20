const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "config",
    category: "HS",
    description: "Retourne le questionnaire de config",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("__**MERCI DE COPIER CE FORMULAIRE, PUIS DE LE REMPLIR, ET DE LE COLLER DANS LE CHANNEL**__\n\n**x Budget :** (A fixer dès le départ) €\n**x Quand voulez-vous acheter :**\n**x Utilisation :** (Gaming/Montage/Stream/Applicatif...)\n**x Critères esthétiques :** (RGB/Fenêtre/Couleur/Taille de boitier etc)\n**x Montage par TopAchat :** (Oui/non)\n**x Moyen de connexion à Internet :** Wifi ou Ethernet ?\n**x Périphériques supplémentaires :** (Écran, clavier...)\n**x Composants déjà en votre possession :**\n**x Jeux joués :**\n**x Logiciels utilisés :**")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}