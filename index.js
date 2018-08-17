const discord = require("discord.js")
const client = new discord.Client()
const fs = require("fs")wawwd w
const token = fs.readFileSync("token", "utf8")

client.login(token)

client.on("ready", () => {
    var channelnew = "478832860036464650"

    client.channels.get(channelnew).send("Я вернулся из Орла, ла-ла, ла-ла.")
    
})