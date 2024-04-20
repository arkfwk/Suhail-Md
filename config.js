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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_38_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY1LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOSxcbiAgICAgICAgODQsXG4gICAgICAgIDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI5LFxuICAgICAgICA5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN1RBaWtLTlB4SCtMOG9IZzBEdHBqWGtGV1p0NzEvTUxiWmRRbFpGRmlaYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLWNKbXpjS3BTUUNubXlYWmtYMHFfZ1wiLFxuICBcInBob25lSWRcIjogXCI0ZjhkOTIxNy05ZDA0LTQyZDYtYmQxYS1iYTllNDVlMDgwZjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgNjYsXG4gICAgICA0NCxcbiAgICAgIDYyLFxuICAgICAgMTcyLFxuICAgICAgNTQsXG4gICAgICA1MCxcbiAgICAgIDIxOCxcbiAgICAgIDQ4LFxuICAgICAgOTYsXG4gICAgICAyNDQsXG4gICAgICAxNzksXG4gICAgICAxMSxcbiAgICAgIDgyLFxuICAgICAgMjcsXG4gICAgICAxMSxcbiAgICAgIDc4LFxuICAgICAgNjAsXG4gICAgICAyMixcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxMDIsXG4gICAgICA0OSxcbiAgICAgIDE3NSxcbiAgICAgIDE5OCxcbiAgICAgIDIxNCxcbiAgICAgIDE3OCxcbiAgICAgIDEwOCxcbiAgICAgIDIwNCxcbiAgICAgIDcyLFxuICAgICAgMTIyLFxuICAgICAgMTkxLFxuICAgICAgMTEwLFxuICAgICAgMTUwLFxuICAgICAgMzIsXG4gICAgICAyMjcsXG4gICAgICA3NCxcbiAgICAgIDc1LFxuICAgICAgMTQzLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1BSRllHQTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNTUyOTY1ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjExMjY3MDEyNzMxMzM6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ+YW0gICAgICAgICAgICAgICAg4bS0YWNrZXJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLN292SkVERU9XcGpiRUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIngzWVNVMjdUVVNzaXlTbDErTk1tbDlkdy9pN010b3lnVzdBODR1bEg1VVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTWtNalFmOWlRSFRwZkY5QlpVRFlRTEJ5Z3RzWXRYS2lpdnVkTnIxMWZPQVBnd05icXdGd1pCTDNhdUhIckNLMGduYmMzWk5yL3BGK3JoNWhZcXk0REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmZEUjV5amJMYSs5TkJMWFQyaWd3cXlXVldsYlRiZjQvK2RJVG5ZSDczaGd1M3VzdW9RUkV5SS9mQm96czlQMHQ3dmNPTDhaR3MxOER4cHlyanE4QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA1NTI5NjU4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM1OTE1MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNNVdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU01Vy5qc29uIjogIntcImtleURhdGFcIjpcInRTRHB2T3F4dUdHcXFJVWdERlBNYjFWRDBsdmNWSkVrOEd5TnJiNDQyMGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQxOTU0MzUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
