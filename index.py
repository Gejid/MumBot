import discord
import asyncio

client = discord.Client()

f = open("token", "r+")
token = f.read()
f.close()

@client.event
async def on_ready():
    channelnew = "478832860036464650"

    await client.send_message(client.get_channel(channelnew), "Я вернулся из Орла, ла-ла, ла-ла")
    
client.run(token)