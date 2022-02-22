let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/a7d41633656e531d6a0b7.jpg")).buffer(), '»»—>»»—----°°°⍟°°°----—««<—««\n\n❖--| • 404 Bot online now.\n• |--❖\n\n※ ✤ 👷Bot working as no errors. ✤\n\n*Type .panel to get my full commad list.*\n\n✇ 🏅Thank you for using 404bot🏅\n\n\n__________________________'  , '🏅menu🏅', '.menu', '🏅status🏅', '.botstatus')
}
handler.tags = ['main']
handler.help = ['alive']
handler.command = /^(alive)$/i
module.exports = handler
