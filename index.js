const Discord = require("discord.js");
const Client = new Discord.Client;
const { prefix, token, captcha } = require('./config/bot');
const fs = require('fs');
const Canvas = require('canvas');
const moment = require('moment');
Client.commands = new Discord.Collection();

const { Player } = require('discord-player');

Client.player = new Player(Client);
Client.config = require('./config/bot');
Client.emotes = Client.config.emojis;
Client.login(Client.config.discord.token);

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        Client.commands.set(command.name, command);
    };
});

const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    Client.player.on(file.split(".")[0], event.bind(null, Client));
};

fs.readdir('./events/', (err, files) => {
    files = files.filter(f => f.endsWith('.js'));
    files.forEach(f => {
        const event = require(`./events/${f}`);
        console.log(`Loading command ${f}`);
        Client.on(f.split('.')[0], event.bind(null, Client));
        delete require.cache[require.resolve(`./events/${f}`)];
    });
});

Client.on("message", async message => {
    const prefix = "!";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    // Get the command
    let command = Client.commands.get(cmd);
    // If none is found, try to find it by alias

    // If a command is finally found, run the command
    if (command)
        command.run(Client, message, args);
});
Client.on("message", async message => {
    const banword = [process.env.banWordList];
    const user = message.author;
    if (banword.some(word => message.content.toLowerCase().includes(word))) {

        await message.delete();
        user.roles.remove(process.env.roleMembre)
        user.roles.add(process.env.roleMute)

        message.reply("**Utilisateur mute pendant 6h pour utilisation de mauvais mots**")
        setTimeout(() => {
            user.roles.remove(process.env.roleMute)
            user.roles.add(process.env.roleMembre)
        }, 21600000)
    }
});

Client.on("guildMemberAdd", async member => {
    let user = member;
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext(`2d`);

    const background = await Canvas.loadImage(`./wallpaper.jpg`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#C0C0C0';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = `70px Gotham Black`;
    ctx.fillStyle = `#00ff19`;
    ctx.fillText("BIENVENUE", canvas.width / 2.75, canvas.height / 2.65);

    if (member.user.username.length >= 10) {
        ctx.font = `37px Gotham Black`;
        ctx.fillStyle = `#ffffff`;
        ctx.fillText(`${member.user.username}#${member.user.discriminator}`, canvas.width / 2.45, canvas.height / 1.62);

    } else {
        ctx.font = `40px Gotham Black`;
        ctx.fillStyle = `#ffffff`;
        ctx.fillText(`${member.user.username}#${member.user.discriminator}`, canvas.width / 2.45, canvas.height / 1.62);

    }
    ctx.font = `23px Gotham Black`;
    ctx.fillStyle = `#ffffff`;
    ctx.fillText((user.user.bot ? '🤖 •' : '🙎‍♂️ •'), canvas.width / 1.45, canvas.height / 1.05)
    ctx.fillText((moment(user.user.createdAt).format('DD/MM/YYYY')), canvas.width / 1.30, canvas.height / 1.05)
    ctx.font = `23px Gotham Black`;
    ctx.fillStyle = `#ffffff`;
    ctx.fillText(`Bienvenue sur le serveur de la Kroma !`, canvas.width / 3, canvas.height / 1.25)

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png' }))
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), './Welcome.jpg');
    const channelMember = member.guild.channels.create(`captcha-${member.user.username}`, { type: "text" }).then(chan => {
        let category = member.guild.channels.cache.get(process.env.categoryCaptcha, c => c.type == "category")
        chan.setParent(category)

        let everyone = member.guild.roles.cache.get(process.env.roleEveryone)

        chan.updateOverwrite(member.user.id, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
            READ_MESSAGE_HISTORY: true

        })
        chan.updateOverwrite(everyone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        })
    }).catch(console.error)
    const newuser = (`captcha-${member.user.username}`).toLowerCase()
    var channelCreate = member.guild.channels.cache.find(channel => channel.name === newuser)
    setTimeout(() => {
        channelCreate = member.guild.channels.cache.find(channel => channel.name === newuser)
    }, 5000)
    if (channelMember) {
        setTimeout(() => {
            let q = captcha[Math.floor(Math.random() * captcha.length)];
            const Embed = new Discord.MessageEmbed()
                .setTitle(q.type)
                .setColor(`00FF04`)
                .setThumbnail("https://img.static-rmg.be/a/view/q100/w900/h600/2447731/gettyimages-943481846-jpg.jpg")
                .setFooter(`Répondez à ce message avec le bon numéro de question! Vous avez 15 secondes.`);
            channelCreate.send(Embed).then(() => {
                channelCreate.awaitMessages((u2) => u2.author.id === member.id, { time: 15000, max: 1, errors: ["time"] })
                    .then((collected) => {
                        if (collected.first().content == q.answers[0] || collected.first().content == q.answers[1] ) {
                            member.roles.add(process.env.roleMembre);
                            const embedsend = member.guild.channels.cache.get(process.env.channelWelcome)
                            embedsend.send(attachment)
                            channelCreate.send(`Vous venez de vous vérifier ! Vous avez alors l'accès complet au serveur`);
                            setTimeout(() => {
                                channelCreate.delete();
                            }, 2000)
                        } else {
                            member.send(`Vous n'avez pas résolu le captcha.`);
                            channelCreate.delete();
                            setTimeout(() => {
                                member.kick();
                            }, 2000)
                        }
                    }).catch(() => {
                        member.send(`Vous n'avez pas résolu le captcha dans le temps.`);
                        channelCreate.delete();
                        setTimeout(() => {
                            member.kick();
                        }, 2000)
                    });
            })
        }, 5000)
    }
})