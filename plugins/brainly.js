const Brainly = require('brainly-scraper-v2')
const brain = new Brainly("id")
let handler = async function (m, { text, usedPrefix, command }) {
  if (!text) throw `uhm.. You see?\n\nEx:\n${usedPrefix + command} From javascript?`
  brain.search("id", text).then(async res => {
    let br = JSON.stringify(res)
    let json = JSON.parse(br)
    let answer = json.map((v, i) => `_*QUESTION TO ${i + 1}*_\n${v.question.content}\n${v.answers.map((v, i) => `*ANEWER TO ${i + 1}*\n${v.content.replace(/<\/?p>|<\/?strong>|<\/?u>|<\/?h[1-3]>|<\/?span>/g, '').replace(/<br ?(\/|\\)?>/g, '\n')}`).join('\n')}`).join('\n\n•------------•\n\n')
    m.reply(answer)
  })
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
