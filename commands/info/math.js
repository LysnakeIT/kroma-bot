const Discord = require("discord.js");
const Client = new Discord.Client();
const math = require('mathjs');

module.exports = {
    name: "math",
    category: "info",
    description: "Retourne le résultat d'une opération",
    run: async (Client, message, args) => {
        if (!args[0]) return message.channel.send('Veuillez entrer un calcul a effectuer');
        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Mettez svp un calcul valide');
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#00FF04')
            .setTitle(`Calculatrice - ${message.author.username}`)
            .addField("Opération à résoudre :", `\`\`\`css\n${args.join(' ')}\`\`\``)
            .addField("Réponse :", `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed)
    }
}