//probably gonna hate this command tbh. Just wanted to try something with webhooks.

const Discord = require("discord.js");
const Webhook = require("webhook-discord");
const settings = require("./jsons/settings.json")
const hook = new Webhook.Webhook(process.env.WEBHOOKURL);

exports.run = (bot, message, args) => {
const whmsg = new Webhook.MessageBuilder()
.setName(`${message.author.tag}`)
.setAvatar(message.author.avatarURL) //I have no idea if this will work
.setColor("#FFA500")
.setText(args.join(" ").replace("@", "(a)"))
.addField("In Server:", message.guild.id)
.setTime();
hook.send(whmsg)); //Im dumb lmao pls dont view previous version
}
