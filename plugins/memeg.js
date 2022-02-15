const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm.. please give text?\n\n${usedPrefix + command} <text top>|<teks bottom>`
  let [t1, t2] = text.split`|`
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Unknown Mimetype`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} Not support`
  let img = await q.download()
  let link = await uploadImage(img).catch(e => uploadFile(img))
  conn.sendFile(m.chat, global.API('https://api.memegen.link', `/images/custom/${encodeURIComponent(t1 ? t1 : '_')}/${encodeURIComponent(t2 ? t2 : '_')}.png`, {
    background: link
  }), 'meme.png', watermark, m)
}
handler.help = ['mememaker'].map(v => v + ' <teks top>|<teks bottom>')
handler.tags = ['tools']
handler.command = /^(meme(maker|g))$/i

module.exports = handler
