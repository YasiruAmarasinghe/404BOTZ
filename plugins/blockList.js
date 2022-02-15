let handler = async (m, { conn }) => {
    let blocked = conn.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
    conn.reply(m.chat, `
—━•✵∆  ⃟  ⃟✵•∆
┃
┃ *Bloclkist:*
┃
┃ *•Total : ${blocked.length} Users
${blocked.map((v, i) => `┃ *〲 ${i + 1}. @${v.split`@`[0]}`).join`\n`}
┃ *─★‧ﾟ
━━━━━━━⸙`.trim(), m, { contextInfo: { mentionedJid: blocked } })
}
handler.help = ['blocklist']
handler.tags = ['owner']
handler.command = /^list?bloc?k|bloc?klist?|daftarbloc?k|blocks$/i
handler.owner = true

module.exports = handler
