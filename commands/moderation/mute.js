const Discord = require("discord.js");
const Client = new Discord.Client;
module.exports = {
    name: "mute",
    category: "info",
    description: "Mute indéfiniment un user",
    run: async (Client, message, args) => {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("**Vous n'avez pas la permission d'éxécuter cette commande !**");

        if (message.mentions.users.size === 0) {
            return message.channel.send("**Vous devez mentionner la personne à mute !**");
        }

        var mute = message.guild.member(message.mentions.users.first());
        if (!mute) {
            return message.channel.send("**Cet utilisateur n'est pas sur le serveur !**");
        }

        if (!message.guild.member(Client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("**Je n'ai pas la permission de mute !**");
        mute.roles.remove(process.env.roleMembre)
        mute.roles.add(process.env.roleMute).then(member => {
            message.channel.send(`**${mute.user.username} a été mute par ${message.author.username}**`)
        });
    }
}