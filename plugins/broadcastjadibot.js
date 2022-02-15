let handler = async (m, { conn, usedPrefix, text }) => {
  if (conn.user.jid !== global.conn.user.jid) throw false
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '[404 Bot Broadcast]\n\n\n' + teks)
  for (let id of users) {
    await delay(1000)
    await conn.copyNForward(id, content, false)
  }
  conn.reply(m.chat, `_Successfully sent broadcast to ${users.length} number to be bot_
${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g, '') + `?text=${encodeURIComponent(usedPrefix)}menu`).join('\n')}
\nestimation complete ${users.length * 1} Second`.trim(), m)
}
handler.help = ['bcbot'].map(v => v + ' <texts>')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?bot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const delay = time => new Promise(res => setTimeout(res, time))
