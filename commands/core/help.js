module.exports = {
    name: 'help-music',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    run: async (Client, message, args) => {
        if (!args[0]) {
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '#00FF04',
                    thumbnail: {
                        url: "https://i.pinimg.com/originals/c1/cf/6d/c1cf6d575178d84528811aa80a5783fa.jpg"
                    },
                    author: { name: 'Kroma Music Help' },
                    footer: { text: 'Développé par Miorla' },
                    fields: [
                        { name: 'Music', value: music }
                    ],
                    timestamp: new Date(),
                },
            });
        }
    },
};