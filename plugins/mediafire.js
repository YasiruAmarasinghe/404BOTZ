let fetch = require('node-fetch')

let handler = async (m, { conn, args, text }) => {
 if (!args[0]) throw 'Uhm.. please give a URL?'
 let res = await fetch(API('apisanuwa', '/docs/download/mediafire', { url: args[0] }, 'apikey'))
 if (!res.ok) throw await res.text()
 let json = await res.json()
 let { nama, link } = json.result
 m.reply(nama)
  await conn.sendFile(m.chat, json.link, json.nama, '', m)
}
handler.help = ['mefiafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^mediafire$/i

module.exports = handler
