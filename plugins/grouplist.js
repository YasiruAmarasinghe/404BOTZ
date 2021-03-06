let handler = async (m, { conn }) => {
  let now = new Date() * 1
  let gc = conn.chats.all().filter(v => v.jid.endsWith('g.us'))
  let txt = gc.map(v => `${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'left' : 'joined'}]\n${msToDate(db.data.chats[v.jid] === undefined ? '' : db.data.chats[v.jid].expired - now)}`).join`\n\n`
  conn.reply(m.chat, `Total ${gc.length} Group\nRegistered Group s:\n${txt}`, m)
}
handler.help = ['grouplist']
handler.tags = ['info']
handler.command = /^(gro?up(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24 * 60 * 60 * 1000));
  daysms = ms % (24 * 60 * 60 * 1000);
  hours = Math.floor((daysms) / (60 * 60 * 1000));
  hoursms = ms % (60 * 60 * 1000);
  minutes = Math.floor((hoursms) / (60 * 1000));
  minutesms = ms % (60 * 1000);
  sec = Math.floor((minutesms) / (1000));
  return days + " days " + hours + " hours " + minutes + " minutes";
  // +minutes+":"+sec;
}
