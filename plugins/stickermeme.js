const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `reply image with command\n\n${usedPrefix + command} <${atas ? atas : 'text top'}>|<${bawah ? bawah : 'text bottom'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} not supported!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
        quoted: m
    })

}
handler.help = ['stikermeme <top text>|<bottom text>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?meme)$/i


module.exports = handler
