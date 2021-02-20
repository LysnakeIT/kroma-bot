const Discord = require("discord.js");
const Client = new Discord.Client();
const translate = require("@k3rn31p4nic/google-translate-api")
module.exports = {
    name: "translate",
    category: "info",
    description: "Retourne une phrase traduite dans la langue choisit",
    run: async (Client, message, args) => {
        let language = args[0];
        let text = args.slice(1).join(" ");

        if (!language)
            return message.reply("Quel langage je dois traduire")
        if (language.length !== 2)
            return message.reply("Mettre un langage valide");

        if (!text) return message.reply("Je dois traduire quoi");

        const result = await translate(text, { to: language });

        const embed = new Discord.MessageEmbed()
            .setDescription(`:earth_africa: Message envoyé par <@${message.author.id}> traduit dans <#${message.channel.id}>.`)
            .setTitle("Google Traduction")
            .addField('Texte dans la langue de base', `\`\`\`${text}\`\`\``)
            .addField(`Texte traduit en ${language}`, `\`\`\`${result.text}\`\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setColor("00FF04");

        message.channel.send(embed)
    }
}