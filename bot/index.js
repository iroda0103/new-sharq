// services/telegramService.js
const axios = require("axios")

async function  sendTelegramMessage({ chatId, token, text }) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const res = await axios.post(url, {
    chat_id: chatId,
    text: text,
    parse_mode: "HTML"
    })
  return res.data
}
// 5822864370
// -1003068129429  
module.exports = {sendTelegramMessage}
 