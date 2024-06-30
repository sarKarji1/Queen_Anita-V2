//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9LVld0YlRiR1pGR095KzkyMS9NK3lVQ2szVUhoeUVmdy9SeUhVbTEyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2haQS9ZZjVUbGkxM0RkcWY5eFBiVTR3dy9ROHZnSXFZVUJkcUx1dHZnZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRXZ0UVZTSXpsdFplbEFBT3NVVGJvcDZkM2VEbGVKYkd4cU1SR1VrYzFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHbzBSc0hxMitBTzJIQndIK0dqQS9FYXg4OVphem1LWS80MVl4UEF6dGhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJVjRtRElic05lNkJIU3Z2NFZ2WFVkbkh4TTNMaTJYbWJIVGNQT2p0VU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRIREgrYnIraVpUQ0wxcUpHUGRZcEZ5U01XKzVYMTdzUmxvcDAzOWxUUUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0JsMDdNSGo3OElyeDdkQ01YQmN4ZW5TbGNaRi81L2xwd2RucTZKTncxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlOdXNLcU8xZ3ViVlBJdWhuTjI0Wjc3MjE5SFR1VjRyTGJQMTdPTmNYZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZyNDRRSkdzdWdXUVRhb0M4VVU1UGdGdG5pOFdEVW10TytsRjh2ZUQwblVZZWlDcW5Fd1FPbk5xd05ZRmNBTnBhRCtRM2N0NCtTbFVOcmx1RTh0NWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJzelExZG1jWUVra3pzR0dEcnFmaEs0VWYwb3NuMDRpS3NINm14T1ZxY0ZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVRE81cVRUblNEbWJweDM1ejRjQW1RIiwicGhvbmVJZCI6ImRjMjAwZDVkLTUzMGYtNGUzOS04MWMzLTQ3NGNhODRhNTEyMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZDQ1MUkzWUZpdmRud016bS9kbkhTbE9ZVDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSW9XY1dQTWd3NFJjdk1yeVNya3ViTmtWMmFVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFDVDZHNUU5IiwibWUiOnsiaWQiOiI5MjMyNTM2MTc0MjI6OTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQTTdkUUhFTTMyaGJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImV5aFpTdVBONWE2dzRhcENoTXI0SGk5bEl4cUtUSWJXZ2VNOU1YRzBtMFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilo3amd6bzVJWDIrUUtRd3ZsMm1FNHVScWVsRmFCRXJ6dW42cEhVck1SS2tqeDVpOUFOeHdvZytBcmdTdGtrQmtQOERQOGEvY2I1R3B2bDFsVm9McEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjdlUzRUVsZXIxQW5tVzdQUTliQTY1VkxOeHZhZEloUlYyb1FpVFpEamIya1crenk5UmNWM2Z3UmpjTE1DcE52ZEEyK25kZTNkQURhYWtKMWF0aUVodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI1MzYxNzQyMjo5MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYc29XVXJqemVXdXNPR3FRb1RLK0I0dlpTTWFpa3lHMW9IalBURnh0SnRGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzYxNzUyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFWdiJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "923253617422";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/74dfd63683e9322d51b49.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/74dfd63683e9322d51b49.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`DOWNLOADED BY BANDAH E ALI`",
  author: process.env.PACK_AUTHER || "BANDAH E ALI",
  packname: process.env.PACK_NAME || "S A R K A R",
  botname: process.env.BOT_NAME || "BANDAH_E_ALI",
  ownername: process.env.OWNER_NAME || "GUROJI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "pakistan/karachi";
global.github = process.env.GITHUB || "https://github.com/sarkarkejan";
global.gurl = process.env.GURL || "*https://wa.me/+923253617422?text=*HellO SARKAR BANDAHEALI*";
global.website = process.env.GURL || "";
global.devs = "923253617422";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
