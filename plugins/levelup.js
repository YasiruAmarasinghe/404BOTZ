let fetch = require('node-fetch')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
  let pp = global.ppkosong //hmm
  let who = m.sender
  let name = conn.getName(m.sender)
  let discriminator = who.substring(9, 13)
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
  } finally {
    let user = global.db.data.users[m.sender]
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
      return { ...value, jid: key }
    })
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let usersLevel = sortedLevel.map(enumGetKey)
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
      let rank = 'https://telegra.ph/file/8b23cbd3052854477b001.jpg'
        {
          await conn.sendButtonLoc(m.chat, await (await fetch(pp)).buffer(), `Level ${name} ${user.level} (${user.exp - min}/${xp})\Not ${max - user.exp} Enough!`.trim(), watermark, 'On Autolevelup', `${usedPrefix}on autolevelup`, m)
        }
    }
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
      let rank = 'https://telegra.ph/file/8b23cbd3052854477b001.jpg'
        {
          await conn.sendButtonLoc(m.chat, await (await fetch(pp)).buffer(), `${name} Level Up!\n_${before}_ -> ${user.level}`.trim(), watermark, 'Claim', `${usedPrefix}claim`, m)
        }
    }
  }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
