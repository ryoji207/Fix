const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");



module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;

    let infoUser = {
        id:user.id,
        avatar:user.displayAvatarURL(),
        name:user.username,
        tag:user.discriminator,
        status:user.presence.status,
        joined:user.joinedAt
    }
    console.log(user.displayAvatarURL());
    let uEmbed = new Discord.MessageEmbed()
        .setColor(colours.cyan)
        .setTitle("Thông tin người dùng")
        .setAuthor(message.guild.name,infoUser.avatar)
        .setThumbnail(infoUser.avatar)
        .setDescription("ID:\n"+ infoUser.id)
        .addField("Tên:", infoUser.name, true)
        .addField("Mã số:", infoUser.tag, true)
        .addField("ID:", infoUser.id, true)
        .addField("Thông tin:", infoUser.status, true)
        .addField("Ngày tham gia:", infoUser.joiend, true)
   // .setFooter(bot.user.displayAvatarURL);
     return message.channel.send(uEmbed);

}


module.exports.config = {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: "$userinfo (@mention)",
    accessableby: "Members",
}
