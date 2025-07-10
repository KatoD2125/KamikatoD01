const fs = require('fs');
const chalk = require('chalk');
/*
 * Create By Sych
 * Follow https://github.com/sychdev
 * Whatsapp : https://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e
 */
//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\
//settings owner di ./setown.js
global.packname = 'KatoDBotZ'
global.owner = ["6287793464004"]
global.botnum = ["6283878157126"]
global.author = 'aldos'
global.owname = 'KatoD'
global.botname = 'KatoD BotZ'
global.themeemoji = '🪀'
global.f = '> '
global.n = '`'
global.videoMenu = fs.readFileSync('./sychMedia/menu/sych.mp4');
global.listv = ['⛏', '●', '■', '✿', '▲', 'ଳ', 'ϟ', '✶', '➤', '✦', '✧', '△', '❀', '⋆𖦹', '□', '𖤓', 'ᨒ', '◇', '𖣂', '々', '〆', 'ᯓ★', '꩜', '✮']
global.emot = ['🌱', '🌻', '🌞', '❄️', '🌿', '💫', '⭐', '🍃', '🔥', '⚡', '🫧', '🌵', '🪺', '🪨', '🪵', '🌪️', '🍄']
global.tempatDB = 'database.json'
global.pairing_code = true
global.fake = {
    tmenu: 'https://i.ibb.co.com/7bVhfhb/3ed349054e5c77cfbebf58293d1e0df0.jpg',
	texz: `${botname}`,
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://i.ibb.co.com/3rqCPX6/fk.jpg',
	thumbnail: fs.readFileSync('./src/media/sych.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'],
}
global.my = {
	yt: 'https://youtube.com/@kamikaze_06?si=mBH796U1LRzo8DTA',
	gh: 'https://github.com/KatoD2125',
	gc: 'https://chat.whatsapp.com/E66XtuY5q6uDSKp6LdIBcp?mode=r_t',
	ch: '120363383347233294@newsletter',
}
global.limit = {
	free: 20,
	premium: 100,
	vip: 'VIP'
}
global.uang = {
	free: 1000,
	premium: 10000,
	vip: 10000000
}
global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'lu bkn owner tod',
	admin: 'lu bkn atmin tod',
	botAdmin: 'gw bkn atmin tod',
	group: 'cma buat grup aj tod',
	private: 'cm di prvt cht aj tod',
	prem: 'lu bkn user premium tod',
	wait: 'Sabat tod',
	error: 'eror tod!',
	done: 'udh lunas yak'
}
global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
