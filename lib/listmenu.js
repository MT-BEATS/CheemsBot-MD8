const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User


╭––『 Download Menu 』
┆❏.ytsearch 🅕
┆❏.play 🅕
┆❏.ytmp3 🅕
┆❏.ytmp4 🅕
┆❏.google 🅕
┆❏.imdb 🅕
┆❏.weather 🅕
┆❏.wanumber 🅕
┆❏.instaimg 🅕
┆❏.instavid 🅕
┆❏.fbvid 🅕
┆❏.twittervid 🅕
┆❏.telestick 🅟
┆❏.spotify 🅟
┆❏.gitclone 🅕
┆❏.happymod 🅕
┆❏.gdrive 🅕
┆❏.pinterest 🅕
┆❏.ringtone 🅕
╰–––––––––––––––༓

`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
