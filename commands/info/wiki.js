const Discord = require("discord.js");
const Client = new Discord.Client();
const superagent = require('superagent');
const snekfetch = require('snekfetch');
module.exports = {
    name: "wiki",
    category: "info",
    description: "Retourne une page wikipedia d'un sujet donné",
    run: async (Client, message, args) => {
        const query = args.join(' ');
        const { body } = await snekfetch
            .get('https://fr.wikipedia.org/w/api.php')
            .query({
                action: 'query',
                prop: 'extracts',
                format: 'json',
                titles: query,
                exintro: '',
                explaintext: '',
                redirects: '',
                formatversion: 2
            });
        if (query.length === 0) return message.channel.send("Vous devez mentionner une information à rechercher");
        if (body.query.pages[0].missing) return message.channel.send("Pas de résultats, réessayer avec plus d'informations.");
        const embed = new Discord.MessageEmbed()
            .setColor("00FF04")
            .setTitle(body.query.pages[0].title)
            .setFooter('Developpé par Lysnake', 'https://cdn.discordapp.com/avatars/337210490453229579/a_f5e5111527a275d4fd335a89253291a4.gif?size=128')
            .setTimestamp()
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Wikipedia-logo-v2-fr.svg/892px-Wikipedia-logo-v2-fr.svg.png')
            .setDescription(body.query.pages[0].extract.substr(0, 2000).replace(/[\n]/g, '\n\n'));
        console.log(`${message.author.tag} a utilisé la commande /wiki`)
        return message.channel.send(embed).catch(console.error);
    }
}