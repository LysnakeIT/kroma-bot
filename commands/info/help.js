const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "help",
    category: "info",
    description: "Retourne le handler",
    run: async (Client, message, args) => {
        const help_embed = new Discord.MessageEmbed()
            .setColor("#00FF04")
            .setTitle("**Kroma Help**")
            .setDescription("**Préfixe :** `!`\n\n:desktop: Liste des commandes **hardware/Software** : \n\n`!nvidia` `!doc` `!opti` `!cg` `!cpu` `!ddu` `!revo` `!cleaninstall` \n\n `!reflex` `!fortnite` `!navigateur` `!diag` `!formatage` `!obs` \n\n `!config`\n\n :earth_africa: Liste des commandes **Servers** : \n\n `!serverinfos` `!info` `!covid` `!math` `!ping` `!pourcentage` `!weather`\n\n `!wiki` `!translate` `!system` \n\n :video_game: Liste des commandes **Games** : \n\n `!pendu` `!puissance4` `!quizz`")
        message.channel.send(help_embed)
        console.log(`${message.author.tag} a utilisé la commande /help`)
    }
}
