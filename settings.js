const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: '{"noiseKey":{"private":{"type":"Buffer","data":"6A/nGPmhUO6Satu2ShA+XLwLfYa+TCnDYFc6wotTV0E="},"public":{"type":"Buffer","data":"p5jxyhblx2MMDnpxbRPGOqkotyR44Cw7WDV2tChScWc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"uLrnRZ9LNDWjbqoADVIS01DNCQjof6kgqBeKqQGJGXQ="},"public":{"type":"Buffer","data":"n7I9DrS1527AQWIkcmFyJRKTGE0N4yL77BAvX7Iuekw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OAPhR7gys0l1nGyUUJoel1G3P//Rg07ruJuilZOh21c="},"public":{"type":"Buffer","data":"KQdQUERoLHfs91XsVdA/te6x+MZuQJiCY9tK5QzV8RU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"iKxO13tm0vmBdz1eT78ixH9hWxe0dzIVf+3KWV5hBE0="},"public":{"type":"Buffer","data":"hLTx1iD3SLkoqJwHdoZ2ipgaUoIyyD9mjeKtTGZ0mjA="}},"signature":{"type":"Buffer","data":"bI0/cve9BIJOLkpJXM3snL2pPTKVNjs2BQASz91qESqWbefCoKfPNePBURRkSvTSg3YmYoHKa8b/EP/Q+VgSgw=="},"keyId":1},"registrationId":72,"advSecretKey":"xmLAsS6bHOQqt3QMkAvNRqtC4KUVIjtiLYqSoqhVUsY=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"lOJxqEIUT52fPxa9_zKfrQ","phoneId":"df8c3e9a-d13b-41c5-a3f2-58f6730987ba","identityId":{"type":"Buffer","data":"WUz5unx4eqaHjpEKGcRKF3k+++A="},"registered":false,"backupToken":{"type":"Buffer","data":"au2OQMH3HdIHAdxNcJvSHj2hzlQ="},"registration":{},"account":{"details":"CNKmgtYDENW1hbYGGAUgACgA","accountSignatureKey":"Nzrks+dWLIau5Zop2HuUgNOIlhx5+hDpOi+4hmtpzBA=","accountSignature":"Dg3nL7GUzmCsz+H6cZs74vrWDYFL0CJcakwPP3dOdadGnqJbqhF2G1c4gjfb0wyG3Bd61iXhEShpmqH+K21CDA==","deviceSignature":"yPo1ni8VntIqhtcUMNQ/2x0Sz6fkd/19ZUOVLDSn9Xqvt7tURFqFWMQTSkwahcEBEripTdicPI0bZ493dUFKhQ=="},"me":{"id":"923481473477:24@s.whatsapp.net"},"signalIdentities":[{"identifier":{"name":"923481473477:24@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTc65LPnViyGruWaKdh7lIDTiJYcefoQ6TovuIZracwQ"}}],"platform":"android","lastAccountSyncTimestamp":1723947736,"myAppStateKeyId":"AAAAACZe"}',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: 'mongodb+srv://Mughal:mughaltechz@cluster0.zzldy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝐐𝐔𝐄𝐄𝐍 𝐄𝐋𝐈𝐒𝐀',
  OWNER_NAME: 'ᴍ ʀ  ɴ ɪ ᴍ ᴀ',
  OWNER_NUMBER: '92481473477',
  SUDO: '94715166712',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴍᴅ',
  STICKER_AUTHOR: 'Qᴜᴇᴇɴ ᴇʟɪꜱᴀ',
  STICKER_PACK: 'ᴍʀ ɴɪᴍᴀ ᴏꜰᴄ',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
