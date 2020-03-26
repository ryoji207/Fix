const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");



module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;

    let uEmbed = new Discord.MessageEmbed()
    .setColor(colours.cyan)
    .setTitle("Thông tin người dùng")
    .setThumbnail(user.displayAvatarURL)
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setDescription("ID:", user.id)
    .addField("Tên:", user.username, true)
    .addField("Mã số:", user.discriminator, true)
    .addField("ID:", user.id, true)
    .addField("Thông tin:", user.presence.status, true)
    .addField("Ngày tham gia:", user.joinedAt, true)
    .setFooter(bot.user.displayAvatarURL);

}


module.exports.config = {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: "$userinfo (@mention)",
    accessableby: "Members",
}