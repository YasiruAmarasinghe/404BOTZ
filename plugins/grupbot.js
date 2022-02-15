let handler = async m => m.reply(`
*Grup Official Forum Bot*

https://chat.whatsapp.com/IZcDaQwOYlR6cFLeol8uYd
`.trim())
handler.help = ['groupbot']
handler.tags = ['info', 'grup']
handler.command = /^g(c|ro?up)bot$/i

module.exports = handler
