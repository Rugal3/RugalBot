let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*โโ ๐ด๐ป ๐ฝ๐๐ผ๐ด๐๐พ ๐ณ๐ด ๐ผ๐ธ ๐ฒ๐๐ด๐ฐ๐ณ๐พ๐ ๐ด๐ wa.me/573207824209*

*โโ ๐ด๐ป INSTAGRAM DEL CREADOR ๐ด๐ https://instagram.com/rugal.ventas*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `ใ  ๐ฏ๐๐๐๐ ๐พ๐๐๐๐ ใ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'แดส แดแดแดแดส สแดแด แดแด แดกสแดแดsแดแดแดโฉ',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '๐พ MENU ๐พ'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '๐ฎ INSTAGRAM ๐ฎ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
