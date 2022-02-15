let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), `
Hi, ${ucapan()}

${user.banned ? 'You are banned' : `Iam 404Bot, please dont spam/call/ask to save to this number. Can I help you?, Type .menu To Get Bot Menu`}
`.trim(), watermark, user.banned ? 'Owner Bot' : 'Menu', user.banned ? ',owner' : ',?', 'Rules', '.rules', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Colombo').format('HH')
    res = "Good morning🌌"
    if (time >= 4) {
        res = "Good morning🌄"
    }
    if (time > 10) {
        res = "Good afternoon🌇"
    }
    if (time >= 15) {
        res = "Good evening🌅"
    }
    if (time >= 18) {
        res = "Good night🌆"
    }
    return res
}
