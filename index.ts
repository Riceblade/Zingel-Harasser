import DiscordJS, { Channel, GuildInviteManager, Intents, InviteGuild, Message, TextChannel, MessageEmbed, ChannelManager } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS,]
})
client.on('ready', () => {
    console.log('hello')
})
    client.on('messageCreate', (message) => {
        if (message.content === '<@!801336408077238272>') {
            message.reply("You purchased God Potion for 300,000,000 coins! <@!801336408077238272>")
            message.reply("You purchased God Potion for 700,000,000 coins! <@!801336408077238272>")
            message.reply("You died and lost 517,771,801.4 coins! <@!801336408077238272>")
            message.react('<:zingel:924360562652114974>')
        }
    })

client.login(process.env.TOKEN)