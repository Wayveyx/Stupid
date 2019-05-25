const Discord = require("discord.js");
const settings = require("./jsons/settings.json");

exports.run = (bot, message, args) => {
if(message.author.id !== settings.myid) return;
bot.channels.get(args.join().slice(0, 1)).send(args.join(" ").slice(18));
}
