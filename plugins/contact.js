let handler = async (m, { conn, text }) => {
  if (!text) return
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  else who = m.chat
  if (!who) throw 'Tag one contact'
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
}
handler.help = ['save'].map(v => v + ' @mention <name contact>')
handler.tags = ['tools']

handler.command = /^sa?ve?$/

module.exports = handler
