const { Client, Intents} = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 

bot.once('ready' , () => {
    console.log('The Bot is Ready!')
})

bot.on("message", msg => {
    if (msg.author.bot) return

    else if (msg.content === "hi") {
        msg.reply("Hello 👋")
    }
    else if (msg.content === "ping")
         msg.channel.send("Pong !")
})

bot.login("Your Token")