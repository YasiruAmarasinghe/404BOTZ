let fetch = require('node-fetch')
let handler = async (m, { command, conn, text }) => {
  let id = (command.match(/[1-6]$/) || [])[0] || ''
  let url = global.API('xteam', '/magernulis' + id, {
    text,
    nama: conn.getName(m.sender),
    kelas: ' '
  }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'nulis.jpg', watermark, m, false, { thumbnail: await (await fetch(thumbfoto)).buffer() })
}
handler.help = new Array(6).fill('magernulis').map((v, i) => v + (i + 1) + ' <text>')
handler.tags = ['nulis']

handler.command = /^magernulis[1-6]?$/i

module.exports = handler
