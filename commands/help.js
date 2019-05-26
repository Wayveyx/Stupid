const Discord = require('discord.js');
const settings = require('./jsons/settings.json')

exports.run = (bot, message, args, tools) => {
  message.channel.send(new Discord.RichEmbed()
  .setTitle('Help Page')
  .setColor('#FFA500')
  .addField('Util Commands', '**sb;serverinfo** - Shows info about the server.\n**sb;userinfo** - Shows info about you or another person.\n**sb;botinfo** - Info about me.\n**sb;purge** - Purge 2-100 messages.\n**sb;ban** - Ban a user.\n**sb;kick** - Kick a user.')
.addField('Misc. Commands', '**sb;support** - Talk to the Support Server (One way).\n**sb;invite** - Add me to your server.\n**sb;avatar** - My Avatar.\n**sb;myavatar** - Your avatar.\n**sb;sicon** - Server icon.')
.addField('Role commands', '**sb;role** - Custom roles. Role name must start with • and be below the bots role.\n**sb;color** - Colored roles. Role name must start with # and be below the the bots role.')
.addField('Fun Commands', '**sb;cat** - Random cat (has api cooldown).\n**sb;say** - Make me say stuff.\n**sb;yomama** - Yo mama joke.\n**sb;8ball** - Magic 8 ball.\n**sb;gayrate** - See how gay someone is.\n**sb;waifu** - See how much of a waifu someone is')
.setFooter('Stupid Bot 2017-2019'));                                                                               
  if(!settings.ids.includes(message.author.id)) return;
  message.channel.send(new Discord.RichEmbed()
    .addField('Bot Admin Commands', '**sb;eval** - Eval some code to test.\n**sb;drequest** - request a command through a DM to Wayve.')
    .setColor('#FFA500'));
  if(message.author.id !== settings.myid) return;
  message.channel.send(new Discord.RichEmbed()
    .addField('Bot Owner Commands', '**sb;rename** - Rename the bot.')
    .setColor('#FFA500'));

}
