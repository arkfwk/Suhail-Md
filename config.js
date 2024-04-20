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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_02_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyLFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSSFBscWNpYkNxRHhRdGpwWFRyZURYa0tzVndqeThRUDdzQjVqcmk0UjJZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhMDd6VFBab1MxV3FkTzFnMEVHVElRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY5M2M3ZTNjLTRmYmEtNDU4Ni04MWM2LWQ5OTQ0YzFlNDY1MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxMDcsXG4gICAgICAxODksXG4gICAgICAxMzIsXG4gICAgICAyMTgsXG4gICAgICAxMzAsXG4gICAgICAzNyxcbiAgICAgIDE3OCxcbiAgICAgIDEzOCxcbiAgICAgIDcsXG4gICAgICA0MCxcbiAgICAgIDksXG4gICAgICA3NSxcbiAgICAgIDExOCxcbiAgICAgIDcyLFxuICAgICAgNzgsXG4gICAgICAxMjcsXG4gICAgICAyMDcsXG4gICAgICA2OSxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDE5MixcbiAgICAgIDE1MixcbiAgICAgIDIyNixcbiAgICAgIDYzLFxuICAgICAgNTcsXG4gICAgICA0NyxcbiAgICAgIDE0MSxcbiAgICAgIDg4LFxuICAgICAgMTAyLFxuICAgICAgNjMsXG4gICAgICAxMjcsXG4gICAgICA3MixcbiAgICAgIDEzLFxuICAgICAgMjAsXG4gICAgICAxMzIsXG4gICAgICAxNjksXG4gICAgICAxMzksXG4gICAgICAyMDIsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSNVJaSlM4TlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA1NTI5NjU4OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMTEyNjcwMTI3MzEzMzo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIn5hbSAgICAgICAgICAgICAgICDhtLRhY2tlclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0svb3ZKRURFSm5xajdFR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieDNZU1UyN1RVU3NpeVNsMStOTW1sOWR3L2k3TXRveWdXN0E4NHVsSDVVVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkd29CanFHQkErR09QQTFhd1U1ZUtDQjgzSXp5NWxCLytRWVNpRjI1UGhSR2FqK0M2SUY5UjhZaWg2cHJQM1F2ellvUFFGVlU3RTdrODA2Y2JFUmJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJieTM2SUJWRTgxZmFsaTFLWEw0OWdteW9xRGwyZGJTT0FxOXVDUTlzUTF3QWxFVWx1OGEvT0dqdjdNSHBVNnNVZGw2c2JydVdTaytXQVJBcUJRZzFCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDU1Mjk2NTg6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzYzMjU0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZQUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlBSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSjhzazkxSENqZmlzdmNGN2ZCZWN1MVExL0x1aTRnV3gxQjgvcmlzWDdOND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NDE5NTQzNTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMzYyOTY5NTUyN1wifSIKfQ=="  // PUT your SESSION_ID 
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
