# Necessary imports
# Discord api
import discord
# Async|import, output| api
import asyncio

# Client
client = discord.Client()

# Getting the token
# Opening the file for read
f = open("token", "r+")
# Making variable token has the token
token = f.read()
# Closing the thread
f.close()

# Event on client ready
@client.event
async def on_ready():

    # Channel id
    channelnew = "478832860036464650"

    # Client sends message
    await client.send_message(client.get_channel(channelnew), "Я вернулся из Орла, ла-ла, ла-ла")
    
# Logining Client into Discord
client.run(token)