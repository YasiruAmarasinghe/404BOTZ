let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `Example usage:\n${usedPrefix + command} who am i? @94705622162 You are my owner ><`, m, { contextInfo: { mentionedJid: ['94705622162@s.whatsapp.net'] } })
  let cm = copy(m)
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) return conn.reply(m.chat, `Example usage:\n${usedPrefix + command} Who am i? @94705622162 Youare my owner ><`, m, { contextInfo: { mentionedJid: ['94705622162@s.whatsapp.net'] } })
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(real.join(sp).trim())
    }
  })
}
handler.help = ['fitnah <text> @user <text>']
handler.tags = ['tools']
handler.command = /^(fitnah|fakereply)$/

module.exports = handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
