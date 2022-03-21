let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw 'Please give App name'
    let res = await fetch(global.API('apisanuwa', '/docs/search/rexdl-search', {
      name: text
    }, 'apikey') )
  let json = await res.json()
  if (res.status !== 200) throw json
    let string = json.result.map((mod, index) => {
        return `
${1+index}. 📂 *${mod.title}*
🖇️ _${mod.url}_
📃 *Description:*\n${mod.desc}
📩 *To Download:* \`\`\`.mod ${mod.url_download}\`\`\`
`.trim()
    }).join('\n\n =============================== \n\n')
    m.reply('*404BOT Rexdl mod apk search* .\n\n' + string)
}
handler.help = ['findmod'].map(v => v + '<app name>')
handler.tags = ['tools']
handler.command = /^(findmod)$/i

module.exports = handler
