let handler = async (m, { conn, isOwner, isAdmin, participants }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let members = participants.filter(member => member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupDemoteAdmin(m.chat, [user]).catch(console.log)
}
handler.help = ['demote'].map(v => v + ' @user')
handler.tags = ['admin']

handler.command = /^(demote|member|↓)$/i

handler.group = true

handler.admin = false //hehe
handler.botAdmin = true

module.exports = handler
