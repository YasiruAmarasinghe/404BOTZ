const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Example:\n${usedPrefix + command} __.sanuwa.__`

  let res = await fetch(global.API('zekais', '/igs', { username: args[0] }))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.profilehd, 'eror.jpg', `
*🏅•Name:* ${json.data.fullname}
*🏅•Bio:* \n${json.data.bio}
*🏅•Followers:* ${json.data.follower}
*🏅•Following:* ${json.data.following}
*🏅•Posts:* ${json.data.timeline}
*🏅•Private:* ${json.data.private ? 'Yes' : 'No'}
*🏅•Link:* \nhttp://instagram.com/${json.data.username}
`, m, 0, { thumbnail: await (await fetch(json.data.profilehd)).buffer() })
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igsta?lk)$/i
module.exports = handler
