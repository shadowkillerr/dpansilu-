const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}

global.alivemsg = `π. *βπ π πΈπ πΈππππΌ βππ* 

π. *πβπ»ππ πππππΌβ πβπΈππ πΈββ πΉππ*

π. *πππ βπΈβ π»ππβπππΈπ» πΈβπ ππβπΎπ,* 

π. *π»π πππ ππΈβπ πΈ π»ππβπππΈπ» πΈβπ ππβπΎπ...π·πππ ππβπΌ (. π€π ππ π»πͺπππππ₯π.)*

π. *πππ βπΈβ π»ππβπππΈπ» πΈβπ πππ»πΌππ,*

π. *π»π πππ ππΈβπ πΈ π»ππβπππΈπ» πΈβπ πππ»πΌππ...πΉπππ ππβπΌ (. πͺπ₯π βπ π¨ π₯π  ππππ π ππ π₯.)*

π. *βπππΌπ....*

π. *πππ βπΈβ'π πβπΌπΈπ πΉπΈπ» ππβπ»π.*

π. *βπΌπβπΌβπ πΈππ πΈπ»ππβπ*

π. *π»πβ'π πΎπ ππ πβπΌ πΎπβππ πβπΉπππΌπ*

π.*πΈβπ» πππ βπΈβ π»ππβπππΈπ» πΈβπ πππΈπΎπΌπ πΈβπ» πππ βπΈβ ππΈππΌ πππΎπ.*

π.*ππβπΌβ : π»πΈβπΈπ βπΈβππππ.*

π. *πΉππ βπΈππΌ : πβπΈπ»ππ πππππΌβ.*

π. *πβπΈβπ πππ πΈππ π½πβ ππΌππΉπΌβπ.ππ»*

*κ§β€β’ΰΌ$ππ·π°π³πΎπ πΊπΈπ»π»π΄π β³α΄Ήα΄ΏβΏΰΏ* `
 //Costomize Alive Message (type your message in `` )


global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoreadpmngc = true //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owner v card
global.vcardowner = ['+94717069879'] // owner number
global.ownername = "απππππ πππππππ π" // owner name
global.ytname = "" // yt chanel name
global.socialm = "GitHub: shadowkillerr" // github or insta name
global.location = "India, Mizoram, Aizawl" // location

//bot body 
global.alivepic = `https://i.ibb.co/cyyCjN7/20220803-081426.png` // alive picture \\ use "https://ibb.com" to upload photos. < 1 MB

global.dragonchat = "true"  // chat bot  "true" / "false" (200 auto replies in this)
global.callblock = "true" // call block "true" / "false" ("true"  to block callers)
global.antibad = "true" // To remove bad word senders
global.antispam = "true" // To remove or block spammers
global.antilink = "true" // To remove group link sharing peoples
global.upsongvoice = "false" // true/false \\ bot can upload song as voice note (it use your data and storage bacause auto download) you can put "false" (anyone can't get songs as voice note / your data is not wasted)
global.welcom_msg = "true" // Welcome / Goodbye   [true/false]


global.owner = ['+94717069879']
global.ownertag = '+94717069879' //your tag number
global.botname = 'ππ·π°π³πΎπ πΊπΈπ»π»π΄π ππ° π±πΎπ' //ur bot name
global.packname = "ππ·π°π³πΎπ πΊπΈπ»π»π΄π ππ° π±πΎπ" // sticker packname
global.author = "ππ·π°π³πΎπ πΊπΈπ»π»π΄π ππ° π±πΎπ" // sticker author
global.dragonemoji = 'π' // Menu emoji
global.footer = 'ππ·π°π³πΎπ πΊπΈπ»π»π΄π ππ° π±πΎπ' //

//database
global.premium = ['94717069879'] //ur premium numbers

//other
global.sessionName = 'session'
global.antitags = false
global.prefa = ['','!','.','π','β€οΈ','π '] //Command Prefix eg:(.alive ,alive πalive)
global.sp = 'π '
global.mess = {
    success: 'Done β',
    admin: 'Only Admins can use it!π',
    botAdmin: 'Bot wants to be an Adminπ₯',
    owner: 'Only Owner can use this!π',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Botπ',
    wait: 'ππPleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expiredπ€!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    linkm: 'Where is the link?',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban',
    badwords: '*π«Bad Words Not Allowed Here !*\n\nβ οΈ Warning... β οΈ',
    spam: 'β οΈ [SPAM] Detected β οΈ\n\nThe emergency security system was activated.\n\nPowered By: *Κα΄α΄-α΄Κα΄Ι’α΄Ι΄*',
    caption: 'Generated by: β *Κα΄α΄-α΄Κα΄Ι’α΄Ι΄-Κα΄α΄*'
} // END \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thum = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur error pic
global.thumb = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic

global.thumb = fs.readFileSync('./Android/AllData/theme/repl.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []





































// DO NOT CHANGE THIS. ERROR WARNING ΰΆ―ΰ·ΰΆ±ΰ·ΰΆ± ΰΆ­ΰ·ΰΆ±ΰΆΰ· ΰΆ±ΰ·ΰΆ­ΰ·ΰ· ΰΆΈΰ·ΰΆ­ΰΆ± ΰΆ―ΰ·ΰΆΈΰ·ΰΆΈΰ·.
global.rep = { // All Replies = 145
    K1: 'π«’ΰ·ΰ·ΰΆΊΰ·πβ€οΈ',
    K2: 'π€­ΰ·ΰ·ΰΆΊΰ·βοΈππ«Ά',
    K3: 'ππ«Άΰ·ΰ·ΰΆΊΰ·π',
    K4: 'π₯΄ΰ·ΰ·ΰΆΊΰ·π',
    K5: 'πΰ·ΰ·ΰΆΊΰ·, ΰ·ΰ·ΰ· ΰΆ ΰΆΊΰ·π₯΄βοΈ',
    K6: 'πHey thereπ I am WhatsApp Botπ',
    K7: 'β£οΈΰΆΰΆΊΰ· ΰ·ΰΆ½ΰ·ΰ·π',
    K8: 'πΰΆΈΰ·ΰΆΰ·ΰ· ΰ·ΰΆ½ΰ·ΰ·π₯²',
    K9: 'πΰΆΈΰ·ΰΆΰ·ΰ·?',
    K10: 'π₯ΊΰΆΰΆΊΰ· ΰΆΰΆ±ΰ·?β€οΈπ«’',
    K11: 'πβ€οΈ',
    K12: 'πΰ·ΰ· ΰ·ΰ·πΰ·ΰ· ΰ·ΰ·',
    K13: 'πΰ·ΰ· ΰ·ΰ·π',
    K14: 'πΰ·ΰ·...',
    K15: 'ΰΆΰΆΊΰ·π₯²',
    K16: 'ππβοΈ',
    K17: 'πΰΆΰ·ΰ·',
    K18: 'ΰΆ ΰ·ΰΆ§ΰ· ΰΆ­ΰΆΈΰΆΊΰ·π',
    K19: 'π₯Ίπ₯ΊΰΆΰΆΊΰ· ΰ·ΰ·ΰΆ―ΰ·β€οΈπ',
    K20: 'ΰΆΰ·ΰ·ΰ·ΰΆΈΰ·ΰΆ­ΰ· ΰΆ±ΰ· ΰΆΰΆ­ΰ·ΰΆπ',
    K21: 'πΰΆΈΰΆ±ΰ· ΰΆ―ΰΆ±ΰ·ΰΆ±ΰ·π₯²',
    K22: 'ΰ·ΰ·ΰΆ³ΰΆΊΰ· ΰΆ­ΰΆΈΰ·π',
    K23: 'ππΰΆΈΰΆ»ΰ· ΰ·ΰ·ΰΆΆΰ·ΰΆΊΰ·',
    K24: 'ΰΆΈΰΆ½ΰ·π',
    K25: 'ππβ€οΈ',
    K26: 'ππΰΆΈΰ·ΰΆ±ΰ·ΰΆ± ΰΆΰΆΊΰ·ΰΆ§π',
    K27: 'πΰΆΰΆ­ΰ·ΰΆ­ΰΆΈΰΆ―?β€οΈ',
    K28: 'βΊοΈπ»ΰΆΰΆΊ ΰΆΰΆ­ΰ·ΰΆ­ΰΆΈΰΆ―β€οΈ',
    K29: 'ΰΆΰΆΊΰ·π',
    K30: 'π₯ΊβοΈΰ·ΰ·ΰΆ―ΰ·ΰΆ±ΰ·ΰΆ―?',
    K31: 'ππΰΆΰ·ΰΆ§ ΰΆΰΆ±ΰ·ΰΆ± ΰΆΰΆ΄ΰ· ΰ·ΰΆ»ΰ·ΰΆ­π',
    K32: 'πΰΆΰΆ±ΰ· ΰΆΈΰ·π ΰΆΊΰΆ±ΰ·ΰ· ΰΆΊΰΆ±ΰ·ΰΆ±π',
    K33: 'ΰΆΰΆΊΰ· ΰΆ­ΰΆΈΰΆΊΰ· ΰ·ΰ·ΰΆ»ΰ·π ΰΆΈΰΆΰ· ΰ·ΰ·ΰΆ­ ΰ·ΰ·ΰΆ»ΰΆΰΆΈΰ· ΰΆΰ·ΰ·ΰΆ±ΰ· ΰΆΰΆ­ΰ·ΰΆπ',
    K34: 'πΰΆΈΰ·ΰΆΰ· ΰ·ΰ·ΰΆΈΰ· ΰΆΰ·ΰΆ±ΰ·ΰΆ±ΰ·π ΰΆΆΰΆΰΆΈΰ·ΰΆ±ΰ·',
    K35: 'βππΰΆΈΰ·ΰΆΰ·ΰ· ΰ·ΰΆ½ΰ·ΰ· ΰ·ΰ·ΰΆΈΰ· ΰ·ΰ·ΰΆΈΰ· ΰΆΰ·ΰΆ±ΰ·ΰΆ±ΰ·?',
    K36: 'πΰΆ±ΰ· ΰΆΰΆ±ΰ· ΰΆΈΰ·ΰΆΰ·ΰΆ­ΰ· ΰΆ±ΰ·ππ« ',
    K37: 'πΰΆΰ·ΰ·',
    K38: 'βοΈΰΆΰ·ΰ· ΰΆ±ΰΆ ΰΆΰΆ ΰ·ΰΆ ΰΆ»ΰΆΊΰ·π',
    K39: 'πΰ·ΰ· ΰ·ΰ· ΰΆ±ΰ·ΰΆ―ΰ·ΰΆ―?π«£',
    K40: 'πΰΆΈΰ·ΰΆ±ΰ·ΰΆ§ΰΆ― ΰΆΰ·?',
    K41: 'πΰΆΈΰ·ΰΆ­ΰ· ΰΆΰ·ΰΆΊΰ·ππ',
    K42: 'ΰΆΰΆ½π',
    K43: 'ΰΆΆΰ·ΰΆ»ΰ· ΰΆ±ΰΆ ΰΆ±ΰ·ΰΆΰΆ ΰΆΰΆ±ΰ·ΰΆ±π',
    K44: 'πππ',
    K45: 'ΰ·ΰ·ΰΆ―ΰ·ΰΆΊΰ· ΰΆ­ΰΆΈΰΆΊΰ· ΰΆΰΆΊΰ· ΰΆΈΰ·ΰΆΰΆ―?π',
    K46: 'πΰΆ­ΰ·ΰΆΈ ΰΆΰ·ΰ·ΰ· ΰΆ±ΰ· ΰΆΰΆ±ΰ·π₯Ί',
    K47: 'ΰΆΆΰ·ΰΆ±ΰ·ΰΆ±ΰ·π',
    K48: 'ΰΆ±ΰ·ΰΆ―ΰ·ΰΆΈΰΆ­ ΰΆ±ΰΆ ΰΆ―ΰ·ΰΆ―ΰ·ΰΆΰΆ±ΰ·ΰΆ±ΰΆΰ· ΰ·ΰΆ― ΰΆ―ΰ·ΰΆ±ΰ·ΰΆ±ΰ·ΰΆ­ΰ·ΰ·ππβ€οΈ',
    K49: 'πΰΆ―ΰ·ΰΆΈΰ·ΰΆΈ ΰΆ±ΰ·ΰΆ―ΰ·ΰΆΰΆ±ΰ·ΰΆ± ΰΆΆΰ· ΰΆΰΆ±ΰ·π ΰΆ±ΰ·ΰΆ―ΰ·ΰΆΈΰΆ­ ΰΆ±ΰ·ππ',
    K50: 'πΰΆΈΰ·ΰΆΰ·ΰΆ­ΰ· ΰΆ±ΰ· ΰΆΰΆ±ΰ·π«‘',
    K51: 'ΰΆΈΰ·ΰΆΰΆ―ΰ·ΰΆ― ΰΆ―ΰΆ±ΰ·ΰΆ±ΰ·π₯²',
    K52: 'πΰΆΈΰΆΈ ΰΆ±ΰΆ ΰΆΈΰ·ΰΆΰ·ΰΆ­ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±ΰ· ΰΆΰΆ±ΰ·π ΰΆΰΆΊΰ·ΰΆ½ΰ· ΰΆ―ΰ·ΰ·ΰ· ΰΆΆΰΆ½ΰΆ±ΰ· ΰΆΰΆ±ΰ·ΰΆ±ΰ·ΰ·π',
    K53: 'π₯ΊΰΆ΄ΰ·ΰΆ½ΰ·ΰΆΊΰ· ΰΆΰΆ±ΰ·. ΰΆΰΆ΄ΰ· ΰ·ΰ·ΰΆ½ΰ·ΰΆ½ΰΆΈΰΆΰ· ΰΆΰΆ»ΰΆΈΰ·ΰΆ―?πβοΈ',
    K54: 'ππΰΆΰΆ―ΰΆ»ΰ·ΰΆΊΰ·β€οΈ',
    K55: 'πΰΆΰΆ―ΰΆ½ΰ·ΰΆΊΰ· ΰΆΰΆ­ΰ·ΰΆβ€οΈβ€οΈ',
    K56: 'π₯Ίπ₯ΊΰΆΰΆ­ΰ·ΰΆ­ΰΆ―?',
    K57: 'π₯ΊΰΆΰΆ±ΰ· ΰΆ ΰΆΈΰ·ΰΆΰΆ―?π₯΄',
    K58: 'πΰΆΈΰΆ§ΰΆ­ΰ· ΰΆ―ΰ·ΰΆΰΆΊΰ· ΰΆ ΰΆΰ·ΰΆ±π',
    K59: 'π€­ΰΆΰΆ±ΰ·ΰΆ± ΰΆΆΰ· ΰΆΰΆ±ΰ·π',
    K60: 'π«‘ΰΆΈΰ·ΰΆΰΆ― ΰΆΰΆ¬ΰΆ±ΰ·ΰΆ±ΰ·?π',
    K61: 'πΰΆΈΰ·ΰΆΰΆ― ΰΆΰΆΊΰ·ΰΆΊΰ·ΰ·π',
    K62: 'πΰΆΈΰ·ΰΆΰ·ΰΆ­ΰ· ΰΆ―ΰΆ±ΰ·ΰΆ±ΰ·ΰΆ­ΰ· ΰΆΰ·ΰ·ΰΆ±ΰ·ΰ·ΰΆ ΰΆΈΰΆΈππ',
    K63: 'π²ΰ·ΰ· ΰΆΊΰΆΈΰ· ΰΆΊΰΆΈΰ·π',
    K64: 'π₯΄ΰΆ―ΰ·ΰΆ±ΰ·ΰΆ± ΰΆΆΰ·π',
    K65: 'πΰΆ΄ΰ·ΰ·ΰ·ΰ· ΰΆ―ΰ·ΰΆ±ΰ·ΰΆ±ΰΆπ₯²',
    K66: 'πΰΆΆΰΆ©ΰΆΰ·ΰΆ±ΰ· ΰΆ±ΰ·β€οΈπ',
    K67: 'π³ΰΆΰΆΈΰ·ΰΆΈΰ·ΰ· ΰ·ΰ· ΰ·ΰ·π',
    K68: 'πΰΆΰΆΊΰ· ΰΆΊΰΆΰ·ΰ·ππ',
    K69: 'π»ΰΆΰΆΊΰ· ΰ·ΰ·ΰΆΊΰ·π ΰΆΰ·ΰ·ΰΆ ΰΆΰ·ΰ· ΰΆ±ΰΆΊΰ·π',
    K70: 'π₯²ΰΆ―ΰΆ±ΰ·ΰΆ±ΰ·ΰΆ­ΰ·ΰΆ­ΰΆ ΰΆ±ΰ·ΰΆΰΆ ΰΆΰΆ±ΰ·ΰΆ±π',
    K71: 'πΰΆΰΆ΄ΰ· ΰΆ­ΰΆΈΰΆΊΰ· ΰ·ΰ·ΰΆ³ΰΆ§ΰΆΈ ΰΆΰΆ»ΰ·π₯²\nπ€§ΰΆ»ΰ·ΰΆ―ΰ·ΰΆ― ΰΆ­ΰΆΈΰΆΊΰ·π',
    K72: 'πΰΆ ΰ·ΰ· πΰΆΰ·ΰΆ΄ΰΆ±ΰ· ΰΆΆΰΆ½ΰΆ±ΰ·ΰΆ±ππ',
    K73: 'ΰ·ΰ·ππππ',
    K74: 'ΰ·ΰΆ±ΰ·ΰΆ©ΰΆ»ΰ·ΰΆ΄ΰ·ΰΆ½ΰ·π₯²π',
    K75: 'πΰΆΰΆ ΰΆΆΰΆ½ΰΆ±ΰ·ΰΆ±ΰΆΰ· ΰΆΰΆΰ·ΰΆ­ΰ· ΰ·ΰ·ΰΆ§ΰ· ΰΆ±ΰ·ΰΆ―π₯΄π',
    K76: 'πΰΆΰΆ½',
    K77: 'π₯²ΰΆΈΰ·ΰΆΰ·ΰ· ΰΆ©ΰ·ΰ·πβ£οΈ',
    K78: 'ΰΆΰΆ©ΰ·ΰ·ΰ·ππΉ',
    K79: 'ΰΆΰΆΊ ΰΆΰ·ΰ·ΰ·ΰ·ΰΆ§ ΰΆ½ΰ·ΰΆΰ· ΰΆ±ΰ· ΰ·ΰ·ΰΆ³ΰ·π',
    K80: 'πΉΰΆΈΰΆΈ ΰΆ±ΰΆ ΰΆ΄ΰ·ΰΆ©ΰ· ΰΆ­ΰΆΈΰΆΊΰ· ΰΆΰΆ­ΰ·ΰΆπ',
    K81: 'π₯΄ΰΆ§ΰ·ΰΆΰΆΊΰ· ΰΆ―?π',
    K82: 'π₯΄ΰΆΰΆΰ· ΰΆΰ·ΰ·ΰΆΈ ΰΆ±ΰ· ΰΆΆΰΆ±ΰ·π',
    K83: 'π₯²ΰΆ ΰΆΈΰ·ΰΆΰΆ―ΰ·ΰΆ― ΰΆΰΆ»ΰ·?',
    K84: 'πΰΆΰ·ΰ·ΰΆΈ ΰΆΰ·ΰΆΊΰΆ±ΰ·ΰΆ± ΰΆΰΆ΄ΰ· ΰΆΰΆΊΰ·ΰΆ½ΰ· ΰΆ΄ΰ·ΰ·ΰΆ±ΰ·ππ€­',
    K85: 'ΰ·ΰ·ΰΆΈΰ·ΰΆΈΰ·π ΰΆ΄ΰ·ΰ· ΰΆΰΆ­ΰ·ΰΆπ',
    K86: 'ΰ·ΰ·π ΰΆΰ·ΰΆΊΰΆ±ΰΆΰΆ ΰΆ­ΰΆΈΰΆΊΰ· ΰ·ΰ·ΰΆ§ΰ·ΰΆΊΰ·πβ£οΈ',
    K87: 'ΰΆΈΰΆ±ΰ· ΰΆ―ΰΆ±ΰ·ΰΆ±ΰ·π₯²',
    K88: '  π  ',
    K89: 'π₯ΊΰΆΰ·ΰ·ΰ·ΰΆ±ΰ· ΰΆΆΰ·ΰΆ­ΰ· ΰΆΰΆ±ΰ·ΰΆ±',
    K90: 'π₯ΊΰΆΰ·ΰΆ©ΰΆΰ· ΰΆΰΆΈΰ·ΰΆ»ΰ·ΰΆ―?βοΈ',
    K91: 'DSI ΰΆ΄ΰ·ΰΆ»ΰΆΰ· ΰΆΰΆ±ΰ·ΰΆ± ΰΆΰ·ΰΆ―?π',
    K92: 'ΰΆΰΆ½ΰ·ΰ·ΰΆΈ ΰΆΰΆ½ΰ·ΰΆ±ΰ·ΰ·ΰΆΰ· ΰΆΰΆ­ΰ·ΰΆπ',
    K93: 'ΰΆΰΆ­ ΰΆ½ΰ·ΰΆ΄ΰ·ΰΆ§ΰ·π₯²',
    K94: 'π«’π«’ΰ·ΰΆ»ΰ· ΰΆ±ΰΆ»ΰΆΰΆΊΰ·π',
    K95: 'πΰΆΈΰΆΈ ΰΆ±ΰΆ ΰΆΰ·ΰ·ΰ·ΰΆΈΰΆ­ΰ· ΰΆΰ·ΰ·ΰΆ±ΰ·ΰ·ΰΆΰΆΊΰ· ΰΆ»ΰΆ§ΰΆΰ· ΰ·ΰΆ§ΰ·πβ€οΈ',
    K96: 'ΰΆΰΆ­ΰ·...π₯²π₯²π₯²π₯²π₯²π₯²',
    K97: 'πΰΆ―ΰ·ΰΆ±ΰ·ΰΆ± ΰΆΆΰ·π',
    K98: 'π±πΰΆ΄ΰ·ΰ·ΰΆ± ΰΆΰΆ ΰΆ ΰ·ΰΆ’ΰ· ΰΆΰΆΰΆ§ ΰΆΰ·ΰΆ½ΰ· ΰΆΰΆΊ ΰ·ΰΆΈΰΆΊΰ· ΰΆΰ·ΰ·ΰ·ΰΆ±ΰ· ΰ·ΰ·ΰΆ©ΰΆΰ· ΰΆΰΆ»ΰΆΰΆ±ΰ·ΰΆ±π',
    K99: 'π«’π€­ΰΆΰΆΊΰ·? ΰΆΰ·ΰ·ΰΆ±ΰ· ΰΆ―?π€¨ππ',
    K100: 'πΰΆ΄ΰ·ΰΆΈΰ· ΰ·ΰ·ΰΆ­ ΰΆ»ΰ·ΰΆ―ΰ·ΰΆ±ΰ· ΰ·ΰΆ­ΰ·ΰΆ­ΰΆ½ΰΆ±ΰ·π₯Ίπ€§',
    K101: 'πΉπΉβοΈ',
    K102: 'ΰΆΆΰΆ½ΰ·ΰΆ½ΰ· ΰΆ΄ΰ·ΰ·ΰ· ΰΆΈΰ·ΰΆΊΰ· ΰ·ΰ·ΰ·ΰ· ΰΆ±ΰΆ»ΰ·ΰΆΊΰ· ΰΆΰΆ½ΰ·ΰΆΊΰ·π',
    K103: 'π₯²ΰΆΰΆ»ΰ·ΰΆ½ΰ· ΰΆΰΆ­ΰ· ΰΆ­ΰΆΈΰ·',
    K104: 'πΰΆΰ·ΰΆΊΰΆ±ΰ·ΰΆ± ΰΆΆΰ·π ΰΆΰΆΊΰ· ΰΆΈΰ·ΰΆΰ·ΰ·?π',
    K105: 'πΰΆΰΆ΄ΰ· ΰΆ΄ΰ·ΰΆ±ΰΆ½ ΰΆΊΰΆΈΰ·ΰΆ―?π€­π«’',
    K106: 'βοΈΰΆΰ·ΰΆΊΰ· ΰΆ±ΰΆ ΰΆΰΆΊΰ· ΰΆΰΆ±ΰ·ΰΆ±ΰ·ΰΆ΄ΰ·π',
    K107: 'πβοΈπ',
    K108: 'ππΰ·ΰ·ΰ·ΰ·ΰΆ½ΰ· ΰΆ±ΰΆ ΰΆΰΆΈΰΆΰ· ΰΆ±ΰ·π',
    K109: 'ΰΆΈΰΆ ΰΆ­ΰΆ»ΰ·ΰΆΊΰ·π ΰΆΰΆΊΰ· ΰΆΈΰ·ΰΆΰ·ΰ·?π',
    K110: 'ΰΆΰΆΊΰ· ΰΆ΄ΰΆΰ·ΰ·π₯²',
    K111: 'ΰΆ½ΰΆΆΰ·ΰΆΆπ',
    K112: 'ΰΆΈΰ·ΰΆ± ΰ·ΰ·ΰΆΈΰ·ΰΆ­ΰΆΰ·ΰΆ― ΰΆΊΰΆΰ·ΰ·?π',
    K113: 'πΰΆ΄ΰΆ½ΰ·ΰΆ±ΰ·ΰΆ± ΰΆ΄ΰ·ΰ·ΰΆ±ΰ·ΰΆ±ΰΆΊπ',
    K114: 'π₯²ππ',
    K115: 'π₯²π₯²πβοΈ',
    K116: 'ππΰΆΰΆ±ΰ·ΰΆ±ΰ·ΰΆ΄ΰ· ΰΆΰ·ΰΆ±ΰ· ΰΆΰ·ΰΆΰ·ΰΆ±π€¨πππ',
    K117: 'ΰΆ―ΰ·ΰΆ±ΰ·ΰΆΈ ΰΆΆΰ· ΰ·ΰΆΈΰΆΊΰ·ΰ·π€­π€­ ΰΆ΄ΰ·ΰ·ΰ·ΰ· ΰΆ―ΰ·ΰΆ±ΰ·ΰΆ±ΰΆππ',
    K118: 'ΰΆΈΰ·ΰΆ± ΰΆ΄ΰΆΰΆΰ·ΰΆ―?π',
    K119: 'ππ',
    K120: 'ΰΆΰ·ΰ·ΰΆΈ ΰΆΰ·ΰΆΊΰΆ±ΰ·ΰΆ±ΰ·ΰΆ΄ΰ· ΰΆ΄ΰ·ΰ·ΰΆ±ΰ·π',
    K121: 'π«’π',
    K122: 'ΰΆΰΆ±ΰ· ΰΆ­ΰ·ΰ· ΰ·ΰ·ΰΆΰ·ΰΆΰΆ±ΰ·ΰΆππ',
    K123: 'πΰΆΰΆΰ·ΰΆΰΆΈΰ·πππ',
    K124: 'ΰΆΰΆΊΰ·π ΰΆ΄ΰ·ΰΆΰΆ― ΰΆΆΰΆ½ΰΆ±ΰ·ΰΆ±ΰ·?',
    K125: 'ΰΆΰΆΆΰ· ΰΆ―ΰ·ΰΆ ΰΆ―?π',
    K126: 'ΰΆΰΆΆΰ· ΰΆ―?π',
    K127: 'π₯²ΰΆΈΰΆ ΰΆΰ·ΰ·ΰΆ­ΰ· ΰΆΰΆ§ΰΆ§ ΰΆΰΆ±ΰ·ΰΆ±ΰΆ―?ππ',
    K128: 'ππΰ·ΰΆΈΰ·ΰ·',
    K129: 'πΰΆΰΆ±ΰ·ΰΆ±ΰ·ΰΆ­ΰ·ΰΆ­ΰΆ ΰΆ±ΰ·ΰΆΰΆ ΰΆΰΆ±ΰ·ΰΆ±',
    K130: 'π€­ΰΆ±ΰ·ΰΆΰΆ ΰΆΰΆ±ΰ·ΰΆ± ΰΆΰΆ΄ΰ· ΰΆΰΆ³ΰ·ΰΆΈΰΆΰ· ΰΆΰΆ³ΰΆΰΆ±ΰ·ΰΆ±πβ€οΈ',
    K131: 'πππ',
    K132: 'ππ€­',
    K133: 'π',
    K134: 'πβοΈ',
    K135: 'ΰΆΰΆ¬ΰΆ±ΰ·ΰΆ± ΰΆΰΆ΄ΰ· ΰΆΰΆ­ΰ·ΰΆππ',
    K136: 'π₯΄ΰΆ΄ΰ·ΰΆ­ΰ·ΰΆ­ΰ·',
    K137: 'π',
    K138: 'ππ',
    K139: 'π₯²π₯²π',
    K140: 'ππ₯°ππππππβ£οΈβ€οΈ',
    K141: 'ππ',
    K142: 'π₯ΊΰΆ―ΰ·ΰΆΰ· ΰ·ΰ·ΰΆ±ΰ·ΰΆ± ΰΆΰΆ΄ΰ· ΰΆΰΆ­ΰ·ΰΆβ€οΈ',
    K143: 'π₯Ίπ₯Ίπ',
    K144: 'β€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈβ€οΈ',
    K145: 'π«‘π« π€',
    K146: 'π€ΰΆ―ΰ·ΰ·ΰΆΰ· ΰΆΈΰΆ½ΰ·πΈ ΰ·ΰ·ΰΆΰ·ΰ·ΰΆ­ ΰ·ΰΆ±π ΰΆΈΰ· ΰ·ΰ·ΰΆΈΰ·ΰΆ―ΰ·ΰΆ»ΰ· ΰΆΰΆ―ΰ·ΰ·ΰΆ±ΰ·π ΰΆ΄ΰΆ­ΰΆ±ΰ·ΰΆ±ΰΆΈΰ· ΰΆΰΆΆ ΰ·ΰ·ΰΆΈΰΆ§π ΰ·ΰ·ΰΆ·ΰΆΈ ΰ·ΰ·ΰΆ· ΰΆΰΆ―ΰ·ΰ·ΰΆ±ΰΆΰ· ΰΆΰ·ΰΆΊΰ·...π',
    K147: 'ΰΆ½ΰΆΆΰΆ±ΰ·ΰΆ±ΰ·ΰ·ΰ· ΰΆ»ΰ·ΰΆ­ΰ·βΰΆ»ΰ·ΰΆΊ ΰ·ΰ·ΰΆ±ΰ·ΰΆ±ΰ· ΰ·ΰ·ΰΆ½ΰ·ΰΆΈΰΆ±ΰ· ΰΆ΄ΰ·ΰΆ±ΰ·ΰΆ±, ΰΆΈΰ· ΰΆ»ΰ· ΰΆ―ΰ·ΰΆ©ΰ·ΰΆΊΰ·ΰΆ±ΰ· ΰΆ­ΰ·ΰΆΈΰ· ΰΆΰ·ΰ·ΰΆ»ΰ·ΰΆ±, ΰΆ΄ΰ·ΰΆ»ΰ·ΰΆ­ΰΆΊΰΆ±ΰ· ΰΆΰΆ― ΰΆΊΰΆ§ΰΆ§ ΰΆΰΆ±, ΰΆΰ·ΰΆΈΰ·ΰΆ·ΰ·ΰΆ«ΰ·ΰΆ©ΰΆΊΰ·ΰΆ±ΰ· ΰΆ’ΰΆ±ΰ·ΰΆ½ΰ· ΰ·ΰΆ½ΰ·ΰΆ±ΰ· ΰΆΰΆΆΰ· ΰΆΆΰΆ½ΰΆ±, ΰΆ·ΰΆΊΰ·ΰΆ±ΰΆ ΰΆ»ΰ·ΰΆ­ΰ·βΰΆ»ΰ·ΰΆΊΰΆΰ· ΰ·ΰ·ΰ·ΰ·ππ»π»β€οΈ'
    }






let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
