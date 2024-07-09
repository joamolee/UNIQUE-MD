import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Owner Numbers 
global.owner = [
  ['923135673658', 'wasi', false],
  [''], 
  [''],
]

//global.pairingNumber = "" //put your bot number here
global.mods = ['923192173398'] 
global.prems = ['923192173398', '923192173398', '923192173398']
global.allowed = ['923192173398']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}

// Sticker WM
global.botname = '𝗪𝗔𝗦𝗜-𝗠𝗗'
global.princebot = '🛡️𝗪𝗔𝗦𝗜 𝗧𝗘𝗖𝗛🛡️'
global.packname = '𝗪𝗔𝗦𝗜♥️' 
global.author = '𝗧𝗘𝗖𝗛♥️' 
global.princeig = 'https://www.instagram.com' 
global.princegp = 'https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j'
global.menuvid = 'https://i.imgur.com/0UK6D3b.mp4'
global.Princesc = '' 
global.princeyt = 'https://youtube.com/@wasitech1'
global.Princelog = 'https://i.imgur.com/ujxeU8g.jpeg'
global.thumb = fs.readFileSync('./Assets/wasi.png')

global.wait = '*♻️ _ʟᴏᴅɪɴɢ ᴘʟᴢ ᴡᴀɪᴛ ᴅᴇᴀʀ _*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 
peyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNxbFlrRmc5TldaN0tLRVB6TzY4VmxYMnpXLzEySzBxSWQrdStjdFdXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGdZeU9UbDFubHlRQVMzcnZ3VTltNCtQcktiODJ0dllZVEttNVh6OXd6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RDBqQXJYWERYQWI5NGQ4aGtrK0Y3bmJxYjR5QkIwRmM4NGRKMk9WNDJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTeit4K2lGTEdMQ0xJMk8yVGNQYTZRUmE3aUx2TnVyUmFYa3Y0VWUreUdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLRWNIR2FraW9RTGU2UW1Wd05nTmRWcXFHMVVXNVFHd2NTSW5yRGVnV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFseXF6RXA0cElaa1llVEt5RlRLaDF0RXROWmo4WnIwLzBySTlpaGhOaDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0lKTGU0TUxkc0VMNjlYclNWTnphYlFiSThzdkk4ajJ3clNHV3dEWDJHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjdtbDRWYTFkN290NnJueVBYK2lISmw4dmxUU0NKV3hxdWJOVy9hSisxaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFNcnFEOG1JWFZIYzFkeTBiWExOV291cnN3SWkybWpRaUpiZkdlY2t2NGJnWmxYQVVCbm5lTzJtOTZlSkgzeW5hSVJOU3ZObHo0UW5kN1NucWpjVEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJ2SlNTekp5ZEtVbUJGQWdFelg4bnA2QXhmYzdiaUJlS2U2OWRwZ21ZNk1rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcyMzQyNzE2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMDVDRUI5NTlFNkJGRTMwMEU4QTQ4N0VGRjg1REVCMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNDk5NzIyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MjM0MjcxNjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0RDMkY1OTk1RjQ3NjE0QkMzQ0YwMkZBMDM1QjE4OEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDQ5OTcyM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUzAybXVfN0hSbHF2UGZGMTRzMUpkdyIsInBob25lSWQiOiJjMDM2YmU3MC1mZWUxLTQ2NDMtOWUxNy02ZmM1MjVmNDRhYTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHR1c0tYUHBEc0pNUStLZHVPbWNlOGFTSkJjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN1SXNIZ1VTNXJoQitKNk9yejVyR0pRTnRxUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXNTQ5VDFYWiIsIm1lIjp7ImlkIjoiMjU0NzIzNDI3MTY5OjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k3VnIvMEJFUGY3c3JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVMbWxaSEppbGQyVEVyb2ZkSzJQczBsZ1NNdnkxbzNVVkpoTkZoRVlsMFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9iTktkTFM4NEIrRm9hVWRoZG85ay84ZjZSTE5LMU5oOGp4TkplRVRUeDFLR2gydTNUckdZRSszaE1qdlRZa1hONDFVYlpDL3VqUW5lQ2UyalZsSkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLTXF0cWFIYjN4bzJqeEhZUytZMjI1R1NZOXc4U0dLRHZoU3pmMjN3TGR4dGg3VkNmZ2RUanozVFIvb0xSdmEyTEZCQWJ1L1cwcE5aTmRSZmRvODNEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcyMzQyNzE2OTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZDNXBXUnlZcFhka3hLNkgzU3RqN05KWUVqTDh0YU4xRlNZVFJZUkdKZEUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA0OTk3MTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ29GIn0=
global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
