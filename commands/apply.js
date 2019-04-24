const Discord = require('discord.js');
const settings = require('./jsons/settings.json');

exports.run = (bot,  message, args, tools) => {
if(message.guild.id !== '480301269529919488') return;
if(message.channel.name !== 'apply') return message.channel.send('Please only apply in #apply.');
if(!args.join(" ").slice(0, 18)) return message.channel.send('Please provide your bots ID.');
if(isNaN(args.join(" ").slice(0, 18))) return message.channel.send('Please provide your bots ID.');

try{
message.channel.send(new Discord.RichEmbed()
.setTitle('Bot Applied!')
.addField('Bot ID', args.join(" ").slice(0, 18))
.addField('Bot Prefix', args.join(" ").slice(19))
.setColor('#FFA500'));

bot.channels.get('508201552729866246').send(new Discord.RichEmbed()
                                           .setTitle('Bot Awaiting Approval')
                                           .setDescription('[Link](https://discordapp.com/oauth2/authorize?client_id=' + args.join(" ").slice(0, 18) + 'missions=8&scope=bot)')
                                           .addField('Author ID' message.author.id)
                                           .addField('Bot ID', args.join(" ").slice(0, 18))
                                           .setColor('#FFA500'));

}

} catch(e) {
message.channel.send('Please provide your bots prefix.');
bot.channels.get('480300841123708939').send(e.message);
}

}
