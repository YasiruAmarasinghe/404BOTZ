let fs = require('fs')
let path = require('path')
const thumb = fs.readFileSync('./src/thumb.jpg')
let MenuMessege = `
             
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝ 
\n \n|• 1.Do not send spam ,virtex, bug and etc for bot Number. 
|• 2.Please report any bugs using *.report*.
|• 3.Contact owner using command .owner, please contact owner in English language. 
|• 4.Please wait few seconds after command. 
|• 5.Want to add bot for any group use command  *.request <group chat invitation link>*
Click below button all menu to get command list`
    const reply = {
    key: {
        participant: '0@s.whatsapp.net'
    },
    message: {
        orderMessage: {
            itemCount: 404,
            itemCoun: 404,
            surface: 404,
            message: `© 404Bot|2022`,
            orderTitle: 'B',
            thumbnail: thumb,
            sellerJid: '0@s.whatsapp.net'
        }
    }
}
conn.send3ButtonLoc(m.chat, thumb, `Hi! I am 404Bot\n\n`, MenuMessege, 'All menu', '.all', 'Developer', '.dev', 'Owner', '.owner', m) 
catch (e) {
    conn.reply(m.chat, 'Soory, menu seding error', m)
    throw e
  }

handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 5


module.exports = handler
