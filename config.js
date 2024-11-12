const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "8TUX1ZLR#eLwmbgOSylKvwkIAApC36VBzUcTWuPXlw3QGMYp7a8U",
  // ADD Your Session Id 
  MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
    // ADD Your MongoDB Database URL
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  mode: process.env.mode || "public",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94779324979",
  //========================================- OTHER - CONFIGS -=====================================================================
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED || "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "pakayo,huththo").split(','),
  ANTI_LINK: process.env.ANTILINK || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING || "false",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "false",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  packname: process.env.packname || "Gaiya",
  author: process.env.author || "Bot",
  //==========================================- API-CONFIGS -==========================================================
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || "2d61a72574c11c4f36173b627f8cb177", //openweathermap.org
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || "sk_6438bcc100d96458f8de0602aec662f4ba14b905fd090ad3", //elevenlabs.io
  SHODAN_API: process.env.SHODAN_API || "cbCkidr6qd7AFVaYs56MuCouGfM8gFki", //developer.shodan.io
  PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH", // pexels.com
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
  PIXABAY_API_KEY: process.env.PIXABAY_API_KEY || "23378594-7bd620160396da6e8d2ed4d53", // pixabay.com
  ZIPCODEBASE_API_KEY: process.env.ZIPCODEBASE_API_KEY || "0f94a5f0-6ea4-11ef-81da-579be4fb031c", // zipcodebase.com
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",


//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

  
  START_MSG: process.env.START_MSG || `🚀 *_Gaiya Bot Connected Successfully!_* ✅ 

--- *👨‍💻🎉 _Welcome to Gaiya Bot!_* 🎉💗 

*🔹 PREFIX:* .

*🔹 OWNER:* 94779324979


_Thank you for using_ *👨‍💻Gaiya Bot💗.*
_We're here to make your experience enjoyable and seamless._
_If you need any help or have questions, don't hesitate to ask._ 🌝💗

*🖇️Join My WhatsApp Channel✓💗 - :* https://chat.whatsapp.com/K4PEuYaHw5wCoF8UE8cxb6

*🖇️Subscribe My Youtube Channel✓💗 - :* https://www.youtube.com/@balalnakuta

*🖇️Fork & Star My Repo✓💗 - :* https://github.com/Gaveex

*🖇️Follow My Github Account✓💗 - :* https://github.com/Gaveex

_*👨‍💻 Enjoy your time with us! 😊*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Gaiya x*` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/3vqGFHv",
  MENU_IMG: process.env.MENU_IMG || "https://ibb.co/3vqGFHv",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
    MENU_MS: process.env.MENU_MS || `menu 2`,

};
