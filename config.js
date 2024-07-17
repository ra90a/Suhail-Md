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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_30_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDksXG4gICAgICAgIDY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYzLFxuICAgICAgICA3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICA3NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExLFxuICAgICAgICAxODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJveHdWWnVBeW1SbnhhY05wZUxhdnRiU1I5RmtLa3hjWHUvbUxQQlhzRU04PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0OTExOTIxNDc3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEIxQTY0QkE3NjY5NUUyODIwQ0RBQTdBNTk3RkE0NEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjMzODI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQ5MTE5MjE0Nzc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NEQwOEM1MkZEM0M5QTY5OUMyOEI0REJBNTdGQTA2RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMzM4MjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRXcwYlNyVnJTVnE2b0oxQ0gtWWpSZ1wiLFxuICBcInBob25lSWRcIjogXCJiNDg1ZjkyNy02YTg2LTQ1Y2QtYjY2OS0zODM1NTAyMDkwOTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMTEwLFxuICAgICAgMjMyLFxuICAgICAgMTQwLFxuICAgICAgNjAsXG4gICAgICAxMjAsXG4gICAgICAyMTUsXG4gICAgICAxODgsXG4gICAgICAyMDAsXG4gICAgICAxNjAsXG4gICAgICAyMzksXG4gICAgICAxMDYsXG4gICAgICA0LFxuICAgICAgMTg1LFxuICAgICAgMTc2LFxuICAgICAgMjMsXG4gICAgICAyNixcbiAgICAgIDI0MixcbiAgICAgIDk1LFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgNTgsXG4gICAgICAxODUsXG4gICAgICA3OSxcbiAgICAgIDEyNSxcbiAgICAgIDU0LFxuICAgICAgMTA3LFxuICAgICAgMjIzLFxuICAgICAgODQsXG4gICAgICA2NyxcbiAgICAgIDE4MyxcbiAgICAgIDY1LFxuICAgICAgMjM1LFxuICAgICAgMTk0LFxuICAgICAgNTEsXG4gICAgICA4NCxcbiAgICAgIDU1LFxuICAgICAgMTEyLFxuICAgICAgMzIsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGR0M3VDEzR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQ5MTE5MjE0Nzc2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ0Mjc3MzA0NDUxMzIzOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUmFmaWVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN1Evam9Rbk9QZnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInMzTzd5aWs2Unp2ajBBb2wxS1JjOFBrdVZ3VURaa3dtbjhQaUJVVisxUW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidlRROFBkeUc1UVVrazhUbENTWWRoMlNmYlYzVE1MdEJDWXY2UE52VEJaQWNGbmhJOGpvUGJaaFNIckxDVitRQ2ZZcUpZNG1XcUZVaC80OGRKcGs1QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOGx4cW1MUSszU1E3RHI5QjhCK3dYN0o2OW5oNStnaUFzOWVQaTBmZWhUL2NSUVBYSE44NDFEWFlqdG9yamRTZVVBQUZzRWZzNnRDLzBNRUVueERXZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQ5MTE5MjE0Nzc2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIzMzgyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9UaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1RoLmpzb24iOiAie1wia2V5RGF0YVwiOlwicDJGajNKZGFYdzgwOEdQWjBYbUVkdWZxY3BGWUZxa0tBM1JVWGdURDNnND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM3MDk1NjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTIzMzgyNDQxMlwifSIKfQ=="  // PUT your SESSION_ID 


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
