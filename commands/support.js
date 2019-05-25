//probably gonna hate this command tbh. Just wanted to try something with webhooks.

const Discord = require("discord.js");
const Webhook = require("webhook-discord");
const settings = require("./jsons/settings.json")
const hook = new Webhook.Webhook(process.env.WEBHOOKURL);

exports.run = (bot, message, args) => {
const whmsg = new Webhook.MessageBuilder()
.setName(`${message.author.tag} in ${message.guild.id}`)
.setColor("#FFA500")
.setText(args.join(" ").replace("@", "(a)"))
.setImage(message.author.avatarURL)
.setTime();
bot.channels.get("581786947333390336").then(hook.send(whmsg)); //This might not work
}
