//const uploadImage = require("../lib/uploadImage");
//const fetch = require("node-fetch");
const tesseract = require("node-tesseract-ocr");

let handler = async (m, { usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw `this is the point for taking the text that is drawn, send / reply to the image with the command ${usedPrefix + command}`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} Not support!`;
  let img = await q.download();
  //let url = await uploadImage(img);
  tesseract
    .recognize(img, {})
    .then((text) => {
      //console.log("Result:", text);
      m.reply(text);
    })
    .catch((error) => {
      console.log(error.message);
      throw eror
    });
};
handler.help = ["ocr"];
handler.tags = ["convert"];
handler.command = /^ocr$/i;


module.exports = handler;
