let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, isOwner, text, isAdmin, args, usedPrefix, command }) => {
        if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
	let isClose = {
		'open': false,
		'open': false,
		'on': false,
		'1': false,
		'close': true,
		'close': true,
		'off': true,
		'0': true,
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `
Example:
${usedPrefix + command} close
${usedPrefix + command} open
	`.trim(), watermark, 'open', ',grup 1', 'close', ',grup 0')
		throw false
	}
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['group <open/close>']
handler.tags = ['group']
handler.command = /^(gro?up)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
