const Discord = require('discord.js');
const settings = require('./jsons/settings.json');


//empty
exports.run = (bot, message, args, tools) => {
message.delete()
message.channel.send(args.join(' ').replace('@everyone', 'everyone').replace('@here', 'here'));
}
