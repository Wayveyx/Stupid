const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot, message, args, tools) => {
message.channel.send(new Discord.RichEmbed()
.setTitle('Support Server')
.setDescription('https://discord.gg/3e8KAZn')
.setColor('#FFA500'));
}