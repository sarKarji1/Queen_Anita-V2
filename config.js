//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5wQ0pwdU9Pc2lEUzg0enZMWUM3cmFoZXNEMGpmc3hpQTBmK1hjQ1hsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3Y0eVM3YjRpUkNNY0dPeEVwRzM3L3BDZStRc1AwMGFaSjkwR0pyUTlXYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUC9XWmdzNEgwbi9aNlluVUt0dWIwSG5xQUplY0RKUm0zSmtjZk42blhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNb3l6SjN6UnpUMmNYejVKa21UNGErbXJFVzRxMmUwQWFQNmNva0JoYTF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJM2dRYjVYQk8rT2c0STdUcWVLbW4xdzBRaUNRUnM4eHZvaWVXM1puMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdFdjFwMmM0R3crVERYcUp2NzdiUFFWbDZyNHhNVzlyZVkwcG0wZGc2QTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lkWTUxRjJ6aEoraTE2WUlhaTJ4RmVERi96dXIyYytqb2JtVldyTm5Haz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWRValhybzRMeDZLMWp2OHhlbVpiOEVvVzEyTzNJV2JsZjlHYlp1bi9RYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklmdlFmUmQyQ1l1dnU2TnVJTFk2ZUExK3hwcDlZaHpMMUpQdzE1cEtrT2JQTTRUZmp4VHZ6UHFxY3gzMmZvZWdRSkhMeUxrNkdIMzJhemtDdUphN2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6IitHZ3plUHdleGZURTMvSzkzZ0lNdDlQT0lZNGc3UndQdmhTMmxWcExVcmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNzA4MDU3MTQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMxN0E3MzlERDgwN0FBOTkwMTI1MEUzN0E4MzM1RUZDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk4MjUyMTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzcwODA1NzE0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MzNDNzA2QjRGNTU0MjU3Mzk5MTg4OTVENUNBODI0MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5ODI1MjE1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM3MDgwNTcxNDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjcyMkJDN0Q0RjMwMDAzNTYxRUE1NzNBNkQ4NkYzMTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTgyNTIxN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYzBGRnpseHNTYnkxVzdQZlFQUTg5ZyIsInBob25lSWQiOiI1N2RiYmVjNi0zYTcyLTQ5ZTQtOWE3My0wNjJiYWI2Y2M1MzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnMvRkdOcW02eHdjcUdaS2l1ZjRHbXBGdDkwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpqaHdSaHZqVlc4SWZVSzM2czRSRFNNL2VZMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3RkUxVEFUViIsIm1lIjp7ImlkIjoiOTIzNzA4MDU3MTQwOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSXR4IG1lIGJhc2l0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON210ZFVIRUxIbWliUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqWDlxaC8vU2tPdzRqL293dllMOG5ZQmtuZzlSb2ZkdGQ0YWNLMEozTFRnPSIsImFjY291bnRTaWduYXR1cmUiOiJQaXQvdjl0dWRzQmJRMVhKMWNHYjR1WmtxYkh3dkVHdm9oSlRLL2QvUXlNTnM0MVVZN0JqM0JuYTZyNWp6dFBkRWpHNkoyaitnSmFCaVhkd01IbXNBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN1VqNXdncFlxTHBMN3hXOG9ZMlVTSmtqL1FaeDhzdXRSK1JFSWJjVXJ1U2kyYjI4dzU1dzhSVzRSVlVlODFVQlNHUDFvR2VIdTRXVFphNTRYaXI5amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM3MDgwNTcxNDA6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZMS9hb2YvMHBEc09JLzZNTDJDL0oyQVpKNFBVYUgzYlhlR25DdENkeTA0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5ODI1MjEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVA2RyJ9";
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
