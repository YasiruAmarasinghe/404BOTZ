const fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
  if (!text) throw 'Nyari apa?'
  let res = await fetch(global.API('https://wall.alphacoders.com/api2.0', '/get.php', {
    auth: '3e7756c85df54b78f934a284c11abe4e',
    method: 'search',
    term: text
  }))
  if (!res.ok) throw eror
  let json = await res.json()
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
  await conn.sendButtonImg(m.chat, await (await fetch(img.url_image)).buffer(), 'wallpaper', watermark, 'Get Again', `${usedPrefix + command} ${args[0]}`, m)
  //await conn.sendFile(m.chat, img.url_image, 'wallpaper', '', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['wallpaperq <pencarian>']
handler.tags = ['internet']
handler.command = /^wall(paper)?q?$/i

module.exports = handler
