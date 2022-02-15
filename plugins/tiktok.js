let regex = /https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com\/.*/i
let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `uhm.. where url?\n\nexample:\n${usedPrefix + command} https://vt.tiktok.com/ZGJBtcsDq/`
    if (!regex.test(args[0])) throw 'url wrong'

    let json = await tiktok2(args[0].match(regex)[0].split(/\n| /i)[0]).then(async res => {
        let data = JSON.stringify(res)
        let json = JSON.parse(data)
        return json
    })
    if (!json.status) throw global.eror
    await m.reply(global.wait)
    await conn.sendFile(m.chat, json.data.videoSD, 'tiktok.mp4', watermark, m, 0, {mimetype: 'video/gif'})
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

handler.limit = 1

module.exports = handler

function numbFormat(int) {
    return Number(parseInt(int)).toLocaleString().replace(',', '.')
}

function tiktok2(url) {
    let config = {
        headers: {
            'Accept': '*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }
    return new Promise(async (resolve, reject) => {
        let form = new URLSearchParams()
        form.append('url', url)
        let json = await (await fetch('https://api.tikmate.app/api/lookup', { method: 'POST', body: form, ...config })).json()
        if (!json.success) return resolve({ status: false })
        let postInfo = {
            author: json.author_name + ' (@' + json.author_id + ')',
            publish: json.create_time,
            likes: numbFormat(json.like_count),
            comments: numbFormat(json.comment_count),
            shares: numbFormat(json.share_count),
        }
        let urlList = {
            videoSD: 'https://tikmate.app/download/' + json.token + '/' + json.id + '.mp4',
            videoHD: 'https://tikmate.app/download/' + json.token + '/' + json.id + '.mp4?hd=1'
        }; resolve({ status: true, ...postInfo, data: urlList })
    })
}
