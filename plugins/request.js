let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link wrong'
    let res = await conn.acceptInvite(code)
    m.reply(`Succesful join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.DATABASE.data.chats[res.gid].expired) global.DATABASE.data.chats[res.gid].expired += jumlahHari
        else global.DATABASE.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendButton(res.gid, `
*${conn.user.name}* I am whatsApp bot created using nodejs,  *${conn.user.name}*is invited by  @${m.sender.split`@`[0]}
    
Type *${usedPrefix}menu* To get command list `.trim(), watermark, 'Menu', `${usedPrefix}?`, { contextInfo: { mentionedJid: [m.sender] } })
}
handler.help = ['request <chat.whatsapp.com>']
handler.tags = ['info']

handler.command = /^request$/i

handler.premium = false

module.exports = handler
