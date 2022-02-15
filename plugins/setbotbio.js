// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `uhm.. where text?`
  try {
    await conn.setStatus(text)
    m.reply('SUCCESS!')
  } catch (e) {
    console.log(e)
    throw `Erorr`
  }
}
handler.help = ['setbotbio <text>']
handler.tags = ['owner']
handler.command = /^(set(botbio|biobot))$/i
handler.owner = true

module.exports = handler
