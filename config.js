const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121247704";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_15_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgNixcbiAgICAgICAgMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU1LFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDU0LFxuICAgICAgICA5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDYyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCZHlOeUhtNHVLaW1HNlcvckFqV0lkMzRqbWJ2djd1TUE2UnI1bE9MWUdFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjEyNDc3MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA0RjgyMUM4QTdBRDkyRjVCOTExNUJGNEE5NEM5MUZCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMwNDkwN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuWnkxTW9HT1I5bTRLM0F1RkRERW1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjczYzBhNmVlLTM2YzEtNDg2MS1iYjYxLTk0MjA2NmFlZjI3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICA0MyxcbiAgICAgIDIsXG4gICAgICAyNTQsXG4gICAgICAzLFxuICAgICAgODksXG4gICAgICAxNTMsXG4gICAgICAyNTIsXG4gICAgICA3MyxcbiAgICAgIDMwLFxuICAgICAgMjE1LFxuICAgICAgNjMsXG4gICAgICA5NixcbiAgICAgIDcxLFxuICAgICAgMTI1LFxuICAgICAgMjMwLFxuICAgICAgMjIzLFxuICAgICAgNzksXG4gICAgICAyMDYsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTI1LFxuICAgICAgMjUyLFxuICAgICAgNyxcbiAgICAgIDUxLFxuICAgICAgMjE3LFxuICAgICAgMTQ3LFxuICAgICAgMTAyLFxuICAgICAgMTkwLFxuICAgICAgMTQ0LFxuICAgICAgMjI4LFxuICAgICAgMjAyLFxuICAgICAgNjksXG4gICAgICAxNTEsXG4gICAgICAxNTYsXG4gICAgICAyMyxcbiAgICAgIDI1MyxcbiAgICAgIDI0MyxcbiAgICAgIDM3LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0MzSjhaS0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjEyNDc3MDQ6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA5ODQ0MDE1NDgwOTk4OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1hybktFREVNT081TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJa1dnSUdFNzZXZXY1WXNFaDAySVQ5VHpLbUFnMzdVUVYvc2RaMmxZdlRNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlgyZGYzdHpEVzJDajdFWkVaeGVFbWltb2dZYUVzcnd5K3Brd0s5SFc1UVhGTVliV1pEaDM5RTc5MUptR0xveWNLb0loN0NITGJWMU5oK2V0QkRNN0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpiTElRU1d6S2tEQmUySnNIOEE3eDBMN1dSQ29jaXg3cVlxdXlVc3dib1JLVkxCMlMxWUhvODNaUVdIWnFFbHBVSWMwSkN4UnMrcFA1eDJHZ0g0cURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjEyNDc3MDQ6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMDQ5MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOc1BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5zUC5qc29uIjogIntcImtleURhdGFcIjpcInhjVWxOa1JrRnFHcGo2dWRkRDZ0VklEeVVFRE1ZNmw1K3kxL0JuR2tMY2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc0OTg0OTMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
