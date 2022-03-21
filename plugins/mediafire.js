
let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'where command ', m)

	axios.get(`https://sanuw-api.herokuapp.com/docs/download/mediafire?url=${text}&apikey=sanuwa`).then ((res) => { 
 conn.sendFile(m.chat, res.result.link, res.result.nama + 'res.result.mime' m)
	})
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^mediafire$/i

module.exports = handler
