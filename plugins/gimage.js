let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `uhm.. what are you looking for?\n\nExample:\n${usedPrefix + command} WhatsApp logo`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw 'Image not founded'
  conn.sendFile(m.chat, url, 'gimage', watermark, m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet']
handler.command = /^(g?ima?ge?)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
