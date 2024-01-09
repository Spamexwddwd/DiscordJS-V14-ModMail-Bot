module.exports = {
    client: {
        token: 'MTE5NDMyNzIzNDM1NDM1NjMyNQ.GmtvHr.-uSCRywvJSUGxIKyDe7vOvpY8_RIuXI8LWT6Gs', // ← Your bot token (.env IS RECOMMENDED)
        id: '1194327234354356325' // ← Your bot ID
    },
    modmail: {
        guildId: '1186055556918673420', // ← Your server ID
        categoryId: '1194326842396639252', // ← The modmail category ID
        staffRoles: ['1186055748631928863'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: 'https://discord.com/api/webhooks/1194327030779629579/YH18p0-Y43LjGZTvlU-VvRDk60FC2K-1KKAAkpu5KxvNng0FFMIInCyHW0bLZbFvONWf' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
