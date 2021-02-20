const Discord = require("discord.js");
const weather = require('weather-js')
module.exports = {
    name: "weather",
    category: "info",
    description: "Retourne la météo dans une ville donnée",
    run: (Client, message, args) => {

        weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {

            if (!result) {
                message.channel.send("**:x: | Emplacement introuvable !**")
                return;
            } else if (result.length === 0) {
                message.channel.send("**:x: | Emplacement introuvable !**")
                return;
            }

            var current = result[0].current;
            var location = result[0].location;
            if (err) message.channel.send(err);
            let embed = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Météo pour ${current.observationpoint} :`)
                .setThumbnail(current.imageUrl)
                .setColor("00FF04")
                .addField('**🕑 Fuseau horaire ❯**', `UTC${location.timezone}`, true)
                .addField('**💥 Type de degré ❯**', "°" + location.degreetype, true)
                .addField('**🌡️ Temperature ❯**', `${current.temperature} Degrés`, true)
                .addField('**🤒 Ressenti ❯**', `${current.feelslike} Degrés`, true)
                .addField('**💨 Vents ❯**', current.winddisplay, true)
                .addField('**💦 Humidité ❯**', `${current.humidity}%`, true)
            message.channel.send(embed)
        });
    }
}