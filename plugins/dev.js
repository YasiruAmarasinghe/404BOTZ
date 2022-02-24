function handler(m) {
  
  this.sendContact(m.chat, '94705622162', 'Yasiru', m)
}
handler.help = ['dev']
handler.tags = ['info']

handler.command = /^(dev|devoloper)$/i

module.exports = handler
