const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1441cfb65678dc21d6e5b.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254705529658" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705529658";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/bf82271be590fbe4ec07e.mp4" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_19_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICA4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICA3NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWGViM0xTM0E5TXJkWFdpSVh5S3dKTnZxN2xrSHFjcGt6V2xaSGVCVkxYcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNmVSbnUzVzJTaE85akRkSHJFTDA2QVwiLFxuICBcInBob25lSWRcIjogXCIyOTkzZmIyOC04YmI2LTRmZjgtYmJmNS00NzVlZGRiYmFkZjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgOTksXG4gICAgICAyMzksXG4gICAgICA1NixcbiAgICAgIDEyNSxcbiAgICAgIDIzNSxcbiAgICAgIDE2NCxcbiAgICAgIDI1MixcbiAgICAgIDIzMyxcbiAgICAgIDI0NCxcbiAgICAgIDE2NSxcbiAgICAgIDE2OCxcbiAgICAgIDE5OCxcbiAgICAgIDUwLFxuICAgICAgMzUsXG4gICAgICA1MSxcbiAgICAgIDIzOSxcbiAgICAgIDE3NixcbiAgICAgIDE0OSxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDExOSxcbiAgICAgIDc5LFxuICAgICAgOTgsXG4gICAgICAxNzMsXG4gICAgICAwLFxuICAgICAgMSxcbiAgICAgIDU2LFxuICAgICAgNDcsXG4gICAgICAyOCxcbiAgICAgIDk5LFxuICAgICAgODQsXG4gICAgICAxNTgsXG4gICAgICAyMSxcbiAgICAgIDY2LFxuICAgICAgMTk2LFxuICAgICAgMzYsXG4gICAgICAzOCxcbiAgICAgIDE2OCxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy9vdkpFREVQWFZqN0VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4M1lTVTI3VFVTc2l5U2wxK05NbWw5ZHcvaTdNdG95Z1c3QTg0dWxINVVVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJYZW9GMU1VM1JNbmJhNFBxcmx6WUFhNzRRc1JFcE8xajBMUkxodkxZbFJFaCtUdzZhOUJXK0RIdXF5dHNRMGwwRjVabUlvdzE2a2hTUGNQejlrUENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImE1c2VZNm5TMVZqOVVvOXFYdk1OdVpjK1hIbzVVZ25kckZnMC9aVjJsVzB0WHEzT1U0OGVOVDRFVjFyd1J6ZXovd3J5V3ZGS2lXQmFlKzhDeTN5dmhRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA1NTI5NjU4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMTEyNjcwMTI3MzEzMzo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA1NTI5NjU4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM2Mjk5NDVcbn0iCn0="  // PUT your SESSION_ID 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".,",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©Hacker" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hacker 』```", //*『sᴜʙsᴄʀɪʙᴇ • Hacker ᴛᴇᴄʜ』*\n youtube.com/@Hackero0"),
 
  author : process.env.PACK_AUTHER|| "Hacker",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Hacker",
  ownername:process.env.OWNER_NAME|| "It's Hacker",


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
