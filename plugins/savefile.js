let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. where text?\n\nUsage:\n${usedPrefix + command} <text>\n\nExample:\n${usedPrefix + command} plugins/omg.js`
    if (!m.quoted.text) throw `error !`
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)
    m.reply(`Saved on ${path}`)
}
handler.help = ['sf'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true

module.exports = handler
