let { MessageType } = require('@adiwajshing/baileys')
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link wrong'
    let res = await conn.acceptInvite(code)
    m.reply(`Succesfully joined group ${res.gid} *Using invitation link 🔗*`).then(() => {
        var jumlahHari = 86400000 * 0.1
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
       await conn.send2ButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/a7d41633656e531d6a0b7.jpg")).buffer(), '\n❖--| • Hi, I am 404 Bot I working with cocommads\n\n*Type .menu to get my full commad list.*\n\n✇ 🏅Thank you for using 404bot🏅\n\n\n__________________________'  , '🏅🄼🄴🄽🅄🏅', '.menu', '🏅🅂🅃🄰🅃🅄🅂🏅', '.botstatus')
}
    await conn.sendMessage(res.gid, `Hello,\n *${conn.user.name}* is WhatsApp ser bot built with Nodejs.Invited by @${m.sender.split`@`[0]}
    Type *.menu* to get my command list. `, MessageType.text, { contextInfo: { externalAdReply :{
       mediaUrl: ' ',
       mediaType: 4,
       title: 'Yasiru ×͜×',
       body: 'Whatsapp Developer Bot',
       thumbnailUrl: 'https://telegra.ph/file/a7d41633656e531d6a0b7.jpg',
sourceUrl: 'https://wa.me/94705622162?text=Hi+I+am+using+%23404Bot%E2%84%A2'
}}})
}
handler.help = ['join <linkgroup> ']
handler.tags = ['main', 'update']
handler.command = /^join$/i

module.exports = handler
