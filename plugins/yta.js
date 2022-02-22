let  limit  =  140
const { servers, yta } = require('../lib/y2mate')

let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `like this:\n${usedPrefix + command} <url>\n\nExample:\n${usedPrefix + command} https://www.youtube.com/watch?v=yxDdj_G9uRY`
  let chat = db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let  isLimit  =  ( isPrems  ||  isOwner ? 99 : limit )  *  1024  <  filesize
  m . reply ( isLimit ? `File Size: ${ filesizeF } \nFile size above ${ limit } MB, download itself: ${ dl_link } ` : wait )
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
*Title:* ${ title }
*File Size:* ${ filesizeF }
`.trim(), m, null, {
    asDocument: true , mimetype: 'audio/mp3'
  } )
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

module.exports = handler
