let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) throw 'where is the username bro?\nExample Nurutomo'
    if (!args[1]) throw 'where is the repo??\nExample wabot-aq'
    
    let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`
    //ByRizkyAdi
    m.reply(`waiting for compress to zip`)
    conn.sendFile( m.chat, url, 'repo.zip', null, m)
    
    }
    handler.help = ['githubdl']
    handler.tags = ['github']
    handler.command = /githubdl/i
    
    
    module.exports = handler
