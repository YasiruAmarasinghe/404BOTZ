let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `Hi Message from creator 
    
╔.★. .═══════════╗
         *Rules*
╚═══════════. .★.╝ 
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝ 
\n \n|• 1.Do not send spam ,virtex, bug and etc for bot Number. 
|• 2.Please report any bugs using *.report*.
|• 3.Contact owner using command .owner, please contact owner in English language. 
|• 4.Please wait few seconds after command. 
|• 5.Want to add bot for any group use command  *.request <group chat invitation link>*
`.trim()
  const button = {
        buttonText: 'CLICK HERE',
        description: 'Yasiru|',
        sections:  [{title: "Click item", rows: [
        {title: 'Menu all', description: "All the bot commands", rowId:".?"},
        {title: 'clone bot', description: "Want to run this bot", rowId:".jadibot"},
        {title: 'Bot status', description: "Its bot status", rowId:".botstatus"},
        {title: 'Number of Owner', description: "Use sinhala or english to chat with bot owner", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule)$/i
handler.help = ['rules']
module.exports = handler
