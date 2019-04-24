const Discord = require('discord.js')
const settings = require('./jsons/settings.json')

//removed the useless 'tools' part lol
exports.run = (bot, message, args) => {
message.channel.send(new Discord.RichEmbed()
                     .setDescription(args.join(" ") + ' is ' + Math.floor(Math.random() * 100 + 1) + '% waifu.')
                     .setColor('RANDOM'));
}
