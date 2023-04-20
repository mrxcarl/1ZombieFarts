const Discord = require("discord.js")
const client = new Discord.Client({ intents: [
  Discord.GatewayIntentBits.Guilds,
  Discord.GatewayIntentBits.GuildMessages
]})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "Hi") {
    msg.reply("I'm still in development. Check for more updates later");
  }
})


client.login(process.env.TOKEN)