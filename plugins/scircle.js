const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Relpy to photo'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} Not support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = global.API('dzx', '/api/canvas/circle', { url }) //`https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}`
  let stiker = await sticker(null, wanted, 'circle', '404Bot™')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Conversion Failed')
  }
}
handler.help = ['circle']
handler.tags = ['sticker']
handler.command = /^circle$/i

module.exports = handler
