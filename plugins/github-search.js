let fetch = require('node-fetch')
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Example:\n${usedPrefix + command} wabot-aq`
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    if (!res.ok) throw eror
    let json = await res.json()
    let str = json.items.map((repo, index) => {
        return ` ${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Made on *${formatDate(repo.created_at)}*_
_Last update *${formatDate(repo.updated_at)}*_
🥽  ${repo.watchers}   🪄  ${repo.forks}   🏅  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Description:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\` \n______________________\n
`.trim()
    }).join('\n\n')
    m.reply( ` *◇404Bot Github search| ${text}* \n\n ` + str)
}
handler.help = ['githubsearch'].map(v => v + ' <query>')
handler.tags = ['tools']

handler.command = /^g(ithub|h)s(earch)?$/i

module.exports = handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}
