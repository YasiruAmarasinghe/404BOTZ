let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw 'Please give App name'
    let response = await fetch(global.API('apisanuwa', '/docs/search/rexdl-search', {
      name: text
    }))
if (!response.ok) throw await response.text()
  let json = await response.json()
  if (res.status !== 200) throw json
    let string = json.items.map((mod, index) => {
        return `
${1 + index}. *${mod.title}*
_${mod.url}_
*Description:*\n${mod.desc}
*To Download:* \`\`\`.mod ${mod.url_download}\`\`\`
`.trim()
    }).join('\n»»————-------------————««\n')
    m.reply('*404BOT Rexdl mod apk search* .\n\n' + string)
}
handler.help = ['findmod'].map(v => v + '<app name>')
handler.tags = ['tools']
handler.command = /^(findmod)$/i

module.exports = handler
