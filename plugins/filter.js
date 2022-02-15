const uploadImage = require("../lib/uploadImage");

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let filt = `
Photo filters using caption in photo  or reply to photo :
╭━━•✵ Filter list 
┃
┃ *OOPTIONS : ∆*
┃ *|•greyscale*
┃ *|•invert*
┃ *|•invertgreyscale*
┃ *|•brightness*
┃ *|•threshold*
┃ *|•sepia*
┃ *|•red*
┃ *|•green*
┃ *|•blue*
┃ *|•blurple*
┃ *|•blurple2*
┃ *─★‧ﾟ
╰━━━━━━━━⸙
`.trim();
  if (!args[0]) throw filt;
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw filt;
  let media = await q.download();
  let link = await uploadImage(media).catch(
    (_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png"
  );
  conn.sendFile(
    m.chat,
    API("https://some-random-api.ml", "/canvas/" + args[0], {
      avatar: link,
    }),
    "",
    args[0],
    m
  );
};
handler.help = ["filter"].map((v) => v + " <photo>");
handler.tags = ["tools", "update"];
handler.command = /^(f(ilter)?|filters)$/i;
module.exports = handler;
