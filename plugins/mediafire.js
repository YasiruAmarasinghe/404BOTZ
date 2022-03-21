let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
 if (!args[0]) throw 'Uhm.. please give a URL?'
 let res = await fetch(API('apisanuwa', '/docs/download/mediafire', { url: args[0] }, 'apikey'))
 if (!res.ok) throw await res.text()
 let json = await res.json()
 let { nama, link } = json.result
 m.reply(JSON.stringify(json.result, null, 2))
 conn.sendFile(m.chat, json.result.link, json.result.nama, null, m)
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^mediafire$/i

module.exports = handler
