const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Display info about this server.'),
    async execute(interaction) {
        return interaction.reply(`服务器名字 : ${interaction.guild.name}\n服务器总人数: ${interaction.guild.memberCount}`);
    },
};