// Requires and necessary variables
// Discord api
const discord = require("discord.js")
// The client of the bot
const client = new discord.Client()
// FileSystem api
const fs = require("fs")
// Getting the token
const token = fs.readFileSync("token", "utf8")
// And the config
const config = require("./config")

// Logining into the Discord by client
client.login(token)

// Event that shows a message to the specific channel when client is ready
client.on("ready", () => {
    // Channel id
    var channelnew = "478832860036464650"

    // Client sends message
    client.channels.get(channelnew).send("Я вернулся из Орла, ла-ла, ла-ла.")
    
})

// Event that catches if someone sent message
client.on("message", async message => {
    // Check if the message author isn't the bot
    if(message.author.bot) return
    // Check if the message has prefix at the start
    if(message.content.indexOf(config.prefix) != 0) return

})

