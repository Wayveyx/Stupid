//just letting others know when a game is free :)
const Discord = require("discord.js");
const settings = require("./jsons/settings.json"); //spelling oops

exports.run = async (bot, message, args) => {
if(!settings.ids.includes(message.author.id)) return;
if(!message.content.toLowerCase().includes("https://")) return message.channel.send("Provide the link dummy.")
if(message.content.toLowerCase().includes("porn")) return; //basic link filter ig
let sent = await bot.channels.filter(m => m.name == "free-games").forEach(m => m.send(new Discord.RichEmbed()
.setTitle("Free Game")
.addField("Link:", args.join(" "))
.setColor("#FFA500")
.setTimestamp()));

message.channel.send(`Link Sent to ${bot.channels.filter(m => m.name == "free-games").size} servers.`);
}
