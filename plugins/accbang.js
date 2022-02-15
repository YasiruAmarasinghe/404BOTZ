let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'No'
  if (isAdmin) throw 'Even through i already admin'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.|jadiadmin$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
