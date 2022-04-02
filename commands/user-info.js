const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Display info about yourself.'),
    async execute(interaction) {
        return interaction.reply(`你的用户名: ${interaction.user.tag}\n你的id: ${interaction.user.id}`);
    },
};