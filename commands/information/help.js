const {
    MessageEmbed,
    Message,
    MessageActionRow,
    MessageButton,
    MessageSelectMenu,
    Client
} = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'info',
    premium: true,
    run: async (client, message, args) => {
        let prefix = "b!"
        const row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId('helpop')
                .setPlaceholder(`❯ ${client.user.username} Help Menu!`)
                .addOptions([
                    {
                        label: ' AntiNuke',
                        description: 'Get All AntiNuke Command List',
                        value: 'first',
                        emoji: '😂'
                    },
                    {
                        label: ' Moderation',
                        description: 'Get All Moderation Command List',
                        value: 'second',
                        emoji: '😂'
                    },
                    {
                        label: 'Utility',
                        description: 'Get All Utility Command List',
                        value: 'third',
                        emoji: '😂'
                    },
                    {
                        label: 'Welcomer',
                        description: 'Get All Welcomer Command List',
                        value: 'fourth',
                        emoji: '😂'
                    },
                    {
                        label: 'Voice',
                        description: 'Get All Voice Command List',
                        value: 'fifth',
                        emoji: '😂'
                    },
                    {
                        label: 'Report',
                        description: 'Get All Report Command List',
                        value: 'sixth',
                        emoji: '😂'
                    }
                    
                ])
        )
        const embed = new MessageEmbed()
            .setColor(client.color)
            .setAuthor({
                name: message.author.tag,
                iconURL: message.author.displayAvatarURL({ dynamic: true })
            })
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(
                `😂
 Prefix for this server \`${prefix}\`\n😂
  Total Commands: \`${client.commands.size}\`**\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) | [Support Server](https://discord.gg/zFtprCNv)**\nType \`${prefix}antinuke enable\` to get started up!`
            )
            .addField(
                'Command Category',
                `**😂
 \`:\` AntiNuke\n😂
  \`:\` Moderation\n😂
 \`:\` Utility\n😂
 \`:\` Welcomer\n😂
 \`:\` Voice\n😂
 \`:\` Report**\n\`Choose A Category To Get All Commands List\``
            )
        message.channel.send({ embeds: [embed], components: [row] })
    }
}
