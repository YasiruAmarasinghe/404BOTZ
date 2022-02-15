let fs = require('fs')
let handler = async (m, { conn, isOwner }) => {
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `➪ *Premium Members*` + `\n` + prem.map(v => isOwner ? '┃•@' + v.replace(/@.+/, '') : '│ ' + conn.getName(v)).join`\n` + '\n┃ *─‧ﾟ\n━━━━━━━━⸙', m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(list?prem(ium)?|prem(ium)?list?)$/i

module.exports = handler
