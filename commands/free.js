//just letting others know when a game is free :)
const Discord = require("discord.js");
const settings = require("./jsons/settings.json"); //spelling oops

exports.run = async (bot, message, args) => {
let sent = bot.channels.filter(m => m.name == "free-games").forEach(m => m.send(args.join(" "))); //Is this against TOS?
message.channel.send("sent");
}
