const discord = require('discord.js');
const settings = require('./jsons/settings.json')

exports.run = async (bot, message, args) => {

if(!settings.ids.includes(message.author.id)) { 
let no = new discord.RichEmbed()
.setTitle('Bot Admins Only.')
.setColor([255,0,0])
.setDescription('The eval command is bot admins only.');
message.channel.send({embed: no});
return;
}
try {
var code = args.join(" ");
var evaled = eval(code);

if (typeof evaled !== 'string')
evaled = require('util').inspect(evaled);

let amevaled = new discord.RichEmbed()
.setTitle('Evaled')
.setColor([255,0,0])
.setDescription(clean(evaled));
message.channel.send(amevaled);
} catch(err) { 
message.channel.send(new discord.RichEmbed()
.setTitle('Error')
.setColor([255, 0, 0])
.setDescription(clean(err)));
}

function clean(text) {
if (typeof(text) === 'string')
return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
           .replace("token", 'fuck off lmao');
else
return text;
}

}
