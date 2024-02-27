//HANYA BOT  YANG SUKA ERROR ERROR 🗿

const fs = require('fs')
const chalk = require('chalk')

global.nomerOwner ="6285719898124"
global.nomerOwner2 = "6285719898124"
global.ownerName = "dy_coders"
global.namabot = "© dy_net"
global.botName = "© dy_net"
global.autoJoin = true
global.sessionName = 'session' //hati hati nanti error
global.public = true
global.packName = "dy_net"
global.authorName = "Created By dy_coders"
global.namastore = "dy_net"
global.nodana = "085719898124"
global.nogopay = "085719898124"
global.noovo = "-"
global.qris = "-"
global.TextT = `dy_net` //
global.textT = `dy_net` // 

global.sgc = 'https://whatsapp.com/channel/0029VaBqOJmLdQeUw9URW60k'
global.syt = ''
global.sig = 'https://instagram.com/xyy_dy_coders'
const mess = {
wait: 'wait...⏳',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
err: 'Terjadi Kesalahan Coba Lagi Nanti!',
limit: '[❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit',
claimOn: 'Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ',
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},
block:{
Bowner: `Maaf kak command sedang dalam perbaikan coba lagi besok .`,
Bsystem: `Command tersebut telah di block oleh system karena terjadi error`
},
only: {
prem : 'Maaf Kak, Tapi Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
group: 'Fitur ini dapat digunakan di dalam group!',
ownerB: 'Fitur khusus Owner Bot!',
owner: 'Maaf Kak Ini Fitur Khusus Owner Ku!!!',
admin: 'Fitur dapat digunakan oleh admin group!',
Badmin: 'Jadikan Rangel Sebagai Admin Terlebih Dahulu!!!'
}

}

global.mess = mess
//=================================================//
global.fotoRandom = [
    "https://telegra.ph/file/8b71af37d07670a5f2228.jpg",
    "https://telegra.ph/file/8b71af37d07670a5f2228.jpg",
    "https://telegra.ph/file/8b71af37d07670a5f2228.jpg",
    "https://telegra.ph/file/8b71af37d07670a5f2228.jpg",
    "https://telegra.ph/file/8b71af37d07670a5f2228.jpg",
   
    ]
// Apikey 
// Website Api

global.APIs = {

	zenz: 'https://api.zahwazein.xyz',
}
// Apikey Website Api

global.APIKeys = {

	'https://api.zahwazein.xyz': 'Your Key',
}

global.api = {
ehz: 'always ehz',
angel: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
//Gausah Juga
global.gcounti = {
'prem' : 1000,
'user' : 20
} 
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})