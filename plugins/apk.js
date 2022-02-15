let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Where  apk name', m)

	axios.get(`http://hujanapi.xyz/api/apkpure?query=${text}&apikey=qrQuAVo14XfmRIr`).then ((res) => {
	 	let hasil = `
Name App : ${res.data.result.data.title}
Link download : ${res.data.result.data.link}
Want to apk download? Type .apkdl (link apkpure) or click button bellow`

    conn.reply(m.chat, hasil, m)
    conn.sendButton(m.chat, 'Download Apk file', watermark, 'Download', `.apkdl ${res.data.result.data.link}`)
	})
}
handler.help = ['apk (name app)']
handler.tags = ['downloader']
handler.command = /^(apk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
