let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = global.ppkosong
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        call: 0,
        role: 'Warrior V',
        autolevelup: false,
        pc: 0,
      }
    }
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role, banned } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let str = `
*Name:* ${username} ${registered ? '(' + name + ') ' : ''}(@${who.replace(/@.+/, '')})${about != 401 ? '\n*Info:* ' + about : ''}
*Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*Link:* https://wa.me/${who.split`@`[0]}${registered ? '\n*Age:* ' + age : ''}
*XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `To level up *${usedPrefix}levelup*` : `${math} XP enough levelup`}]
*Level:* ${level}
*Role:* ${role}
*Limit:* ${limit}
*Premium:* ${prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? 'Yes' : 'No'}
*Registered:* ${registered ? 'Yes (' + new Date(regTime).toLocaleString() + ')' : 'No'}${lastclaim > 0 ? '\n*Last claim:* ' + new Date(lastclaim).toLocaleString() : ''}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', banned ? 'If you get banned' : str, m, false, { contextInfo: { mentionedJid } })
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile?$/i
module.exports = handler
