let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'uhm.. url where?'
  global.API('xteam', '/dl/', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, url, '', '', m)
}
handler.help = ['snackvideo'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^snackvideo$/i
handler.limit = true

module.exports = handler
