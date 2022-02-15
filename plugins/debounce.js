let { spawn } = require('child_process');
let handler = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Reseting Your bot...\nPlease wait above 1 minutes for reset')
    await global.db.write()
    process.send('reset')
  } else throw '_404..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (Does not work)')]
handler.tags = ['host']
handler.command = /^deb(ounce)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

