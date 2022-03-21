let fetch = require('node-fetch')
let {fetchJson} = require("../lib/myfunc")
let fs = require("fs")
let sticker = require("../lib/sticker")
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw 'EXAMPLE:\n\n*.emomix 🐷.😣* or *.emojimix 🤡&👽* '
   	let [emoji1, emoji2] = text.split`&`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		     let stiker = await sticker(false, res.url, global.packname, global.author)
              await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                quoted: m
              })
            })
	}	    
handler.help = ['emojimix','emomix'].map(v => v + ' emot1|emot2>')
handler.tags = ['sticker']
handler.command = /^(emojimix|emomix)$/i

module.exports = handler
