const Discord = require("discord.js");
module.exports = {
    name: "clear",
    category: "info",
    description: "Clear un channel",
    run: async (Client, message, args) => {
        message.delete();
        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission d'éxécuter cette commande !**");
        let args2 = message.content.split(" ").slice(1);
        if (!args2[0]) return message.channel.send("**Vous devez préciser le nombre de messages à supprimer !**")
        message.channel.bulkDelete(args[0]).then(() => {
        });
        setTimeout(() => {
            message.channel.send(`**${args2[0]} messages ont été supprimés !**`)
            console.log(`${message.author.username} a supprimé ${args2[0]} messages`)
        }, 500);
    }
}