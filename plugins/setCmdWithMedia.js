module.exports = Object.assign(async function handler(m, { isOwner, isPremium, text }) {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!(isPremium || isOwner)) {
                global.dfail('premium', m, conn)
                throw false
                }
    if (!m.quoted) throw 'Reply to sticker'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    if (!text) throw `uhm.. where text?`
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (sticker[hash] && sticker[hash].locked) throw 'You dont have to permission to change the sticker order '
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Succes!`)
}, {
    help: ['cmd'].map(v => 'set' + v + ' <text>'),
    tags: ['database'],
    command: ['setcmd']
})
