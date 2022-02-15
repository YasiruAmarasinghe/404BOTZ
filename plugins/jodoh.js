const fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Example:\n${usedPrefix + command} yasiru|${conn.getName(m.sender)}`
    let [nama1, nama2] = text.split(/[&|.]/i)
    if (!nama1 || !nama2) throw `Examlpe:\n${usedPrefix + command} yasiru|${conn.getName(m.sender)}`

    let res = await fetch(global.API('zeks', '/api/primbonjodoh', { nama1, nama2 }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let { thumb, positif, negatif } = json.result
    let caption = `
*Name one:* ${json.result.nama1}
*Name two:* ${json.result.nama2}

*Positive:*
${positif}

*Negative:*
${negatif}
`.trim()
    conn.sendFile(m.chat, thumb, 'file.png', caption, m, 0, { thumbnail: await (await fetch(thumbfoto)).buffer() })
}
handler.help = ['jodoh'].map(v => v + ' <name>|<name doi>')
handler.tags = ['fun']
handler.command = /^(jodoh)$/i



module.exports = handler
