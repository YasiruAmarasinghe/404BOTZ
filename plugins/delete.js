let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (/BROADCAST BOT/i.test(m.quoted.text)) throw 'This is not broadcast!'
  if (!isBaileys) throw 'The message was not sent by a bot!!!'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^d(el)?(ete)?$/i

module.exports = handler
