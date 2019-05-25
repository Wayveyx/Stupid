const Discord = require("discord.js");
const settings = require("./jsons/settings.json");

exports.run = (bot, message, args) => {
if(message.author.id !== settings.myid) return;
bot.channels.get(args.join().slice(0, 18).send(new Discord.RichEmbed()
.setTitle("Support")
.setColor("#FFA500")
.setDescription(args.join(" ").slice(18))
.setTimestamp());
}
