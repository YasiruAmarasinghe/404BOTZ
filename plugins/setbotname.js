// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `uhm.. where text?`
  try {
    await conn.updateProfileName(text)
    m.reply('SUCCESS!')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotname <text>']
handler.tags = ['owner']
handler.command = /^(set(botname|nam(a)?e?bot))$/i
handler.owner = true

module.exports = handler
