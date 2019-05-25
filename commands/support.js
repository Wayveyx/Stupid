//probably gonna hate this command tbh. Just wanted to try something with webhooks.

const Discord = require("discord.js");
const Webhook = require("webhook-discord");
const settings = require("./jsons/settings.json")
const hook = new Webhook.Webhook(process.env.WEBHOOKURL);

exports.run = (bot, message, args) => {
const whmsg = new Webhook.MessageBuilder()
.setName("Stupid Support")
.setColor("#FFA500")
.addField("User:", message.author.tag)
.addField("Message:", args.join(" ").replace("@", "(a)"))
.addField("In Server:", message.guild.id)
.setTime();
hook.send(whmsg); //Im dumb lmao pls dont view previous versions
}
