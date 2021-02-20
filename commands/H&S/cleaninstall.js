const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "cleaninstall",
    category: "HS",
    description: "Retourne le pourquoi il faut formater",
	run: async (Client, message, args) => {
		message.delete();
		if (message.channel.id === process.env.idHS) {
			 message.channel.send("La différence de réinstaller Windows proprement avec une clé usb bootable : \n\n - une réinitialisation avec les paramètres Windows intégrés remet juste les paramètres et le registre à 0 (mais pas tout le temps), en supprimant toutes les applications et fichiers, ainsi que les jeux s'ils sont installés sur le même disque (si vous avez fait le choix de ne pas conserver les fichiers).\n - une réinitialisation avec clé usb permet de tout supprimer, et de réinstaller Windows proprement par dessus après.\n\n Lors d'une éventuelle réinstallation propre : \n - après la nouvelle installation au propre de Windows, il faudra réinstaller les drivers de la carte mère (souvent les pilotes chipset, audio et LAN) ainsi que les drivers de la carte graphique. Et enfin, ceux de la carte wifi si vous en possédez une. Tout cela depuis les sites respectifs des constructeurs.\n - en ce qui concerne la clé d'activation, celle-ci est conservée, uniquement si la réinstallation est effectuée avec la même édition (Windows 10 Professionnel ou Famille) que l'édition actuelle. C'est relié à une licence numérique associée à la carte mère.\n - si jamais la réinstallation est effectuée avec une édition différente, Windows ne sera pas réactivé automatiquement (passage de l'édition famille à l'édition professionnelle, ou même l'inverse). Il faudra dans ce cas acheter une nouvelle clé d'activation (souvent disponible aux alentours des 5€ sur ebay) correspondante à la nouvelle édition")
		} else {
			message.channel.send(":x: \ Mauvais salon")
		}
	}
}