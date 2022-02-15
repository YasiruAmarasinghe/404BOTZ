let handler = async (m, { isOwner, isPremium, command, usedPrefix, text }) => {
    if (!(isPremium || isOwner)) {
                global.dfail('premium', m, conn)
                throw false
                }
    let which = command.replace(/del/i, '')
    if (!text) throw `Use  *${usedPrefix}list${which}* To see the list`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' not registered in message list`
    delete msgs[text]
    m.reply(`Successfully deleted message in message list with name'${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker', 'gif'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
