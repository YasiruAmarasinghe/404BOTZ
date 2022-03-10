let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
      await conn.send2ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
Hey there, 404Bot online now Type .menu to get my full command list \n\nGroup official bot forum:https://chat.whatsapp.com/EcDf9Dsm5LKDY6ysSnsxZ4\nThankyou for using 404BOT™
`.trim(), watermark, 'Menu', `.menu`, 'Owner', `.owner`)
}
handler.tags = ['main']
handler.help = ['alive']
handler.command = /^(alive)$/i
module.exports = handler
