let handler = async (m, { conn }) => await conn.send2Button(m.chat, `
On bot 😇
`.trim(), watermark, 'Menu', '.menu', 'Owner', '.owner', m)
handler.help = ['tes']
handler.tags = ['info']
handler.command = /^(tes(t)?)$/i

module.exports = handler
