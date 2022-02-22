let fs = require('fs')
global.owner = ['94705622162'] // Letakan nomor kamu disini
global.mods = ['94705622162'] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  l0lhuman: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://fxc7-api.herokuapp.com':'pnj8NAJb',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': 'sdz8VotwEnDd4HvdIUfy1e4qTDx',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
}

// Sticker WM
global.packname = '404 STICK PACK'
global.author = '@yasiru\n ×͜×'

global.wait = '*Please wait few moments*'
global.eror = 'Soory some errors founded'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.version =  '404 𝕭𝕺𝕿 @^1.0.0'
global.ttq = `Thanks to:
•𝙽𝚞𝚛𝚞𝚝𝚘𝚖𝚘
•𝙰𝚛𝚒𝚏𝚏𝚋
•𝚇𝚝𝚎𝚊𝚖
•𝚄𝚗𝚊𝚞𝚡 𝚝𝚎𝚊𝚖`
global.ppkosong = 'https://telegra.ph/file/22fd84e4a3244e1b17e4e.png'
global.ppgc = 'https://telegra.ph/file/22fd84e4a3244e1b17e4e.png'
//change the image
global.thumbfoto = 'https://telegra.ph/file/a7d41633656e531d6a0b7.jpg' //thumbnail foto tools
global.yamete = 'https://telegra.ph/file/a7d41633656e531d6a0b7.jpg' //qr
global.sumberurl = 'https'
global.deskripsiurl = 'Bot WhatsApp ×͜×.'


global.watermark = '© 404BOT™|2022'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
