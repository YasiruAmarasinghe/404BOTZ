let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
 if (!args[0]) throw 'Uhm.. please give a URL?'
 let res = await fetch(API('apisanuwa', '/docs/download/rexdl', { url: args[0] }, 'apikey'))
 if (!res.ok) throw await res.text()
 let json = await res.json()
 let { title, url } = json.download
 m.reply(JSON.stringify(json.download, null, 2))
 conn.sendFile(m.chat, url, title, '', m)
}
handler.help = ['mod'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^mod$/i

module.exports = handler
,
