let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    m.reply(`
┌─〔 Status 〕
├ *${groups.length}* Group
├ *${chats.length - groups.length}* Private Chat
├ *${Object.keys(global.db.data.users).length}* Users
├ *${conn.blocklist.length}* Blocked
├ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Banned Chat
├ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Banned User
└────
╭━━•✵ Bot Status
┃
┃ *lists: ↷↷*
┃
┃ *|• ${anon ? '✅' : '❌'} *Anon Chat*
┃ *|• ${anticall ? '✅' : '❌'} *Anti Call*
┃ *|• ${antispam ? '✅' : '❌'} *Anti Spam*
┃ *|• ${antitroli ? '✅' : '❌'} *Anti Troli*
┃ *|• ${backup ? '✅' : '❌'} *Auto Backup DB*
┃ *|• ${groupOnly ? '✅' : '❌'} *Mode Grup*
┃ *|• ${jadibot ? '✅' : '❌'} *Jadi Bot*
┃ *|• ${nsfw ? '✅' : '❌'} *Mode Nsfw*
┃ *─★‧ﾟ
╰━━━━━━━━⸙
    `.trim())
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^(bot)?stat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
