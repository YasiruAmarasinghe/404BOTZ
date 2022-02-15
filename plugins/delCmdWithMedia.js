module.exports = Object.assign(async function handler(m, { isPremium, text, isOwner }) {
    if (!(isPremium || isOwner)) {
                global.dfail('premium', m, conn)
                throw false
                }
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `No hash`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'You dont have permission to delete this sticker command'
    delete sticker[hash]
    m.reply(`Success!`)
}, {
    help: ['cmd'].map(v => 'del' + v + ' <texts>'),
    tags: ['database'],
    command: ['delcmd']
})
