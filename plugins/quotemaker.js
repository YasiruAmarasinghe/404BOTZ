let handler = async (m, { conn, text }) => {
  let [teks, wm] = text.split`|`
  if (!teks) throw `Ketik ${usedPrefix + command} <teks>|<wm>`
  await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text: teks, wm: wm ? wm : conn.getName(m.sender) }, 'APIKEY'), 'file.jpg', watermark, m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['quote'].map(v => v + 'maker <texts>|<wm>')
handler.tags = ['nulis']
handler.command = /^q(uoted?)?maker$/i


module.exports = handler
