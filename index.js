// 引用 dotenv 讀取 .env
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'
import axios from 'axios'
import template from './templates/parking-lot.js'
// import writeJSON from './utils/writeJSON.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async event => {
  if (event.message.type === 'text') {
    try {
      const { data } = await axios.get('https://parkweb.tainan.gov.tw/api/parking.php')
      for (const info of data) {
        if (info.address.includes(event.message.text)) {
          const bubble = JSON.parse(JSON.stringify(template))
          bubble.body.contents[1].text = info.name
          bubble.body.contents[2].text = info.address
          bubble.body.contents[4].contents[0].contents[1].text = info.largeCar.toString() + '格'
          bubble.body.contents[4].contents[1].contents[1].text = info.car.toString() + '格'
          bubble.body.contents[4].contents[2].contents[1].text = info.carDis.toString() + '格'
          bubble.body.contents[4].contents[3].contents[1].text = info.carWoman.toString() + '格'
          bubble.body.contents[4].contents[4].contents[1].text = info.moto.toString() + '格'

          const result = await event.reply({
            type: 'flex',
            altText: 'msg',
            contents: bubble
          })
          // writeJSON(bubble, 'bubble')

          if (result.message) {
            throw new Error(result.message)
          }
          // event.reply(`
          // 停車場地址: ${info.address} 格
          // 大型車剩餘： ${info.largeCar} 格
          // 一般小型車剩餘: ${info.car} 格
          // 殘障者小型車剩餘: ${info.carDis} 格
          // 婦幼小型車剩餘: ${info.carWoman} 格
          // 一般機車剩餘: ${info.moto} 格
          // `)
          return
        }
      }
      event.reply('請輸入欲查詢「路段」或「區域名」')
    } catch (error) {
      console.log(error)
      event.reply('發生錯誤')
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
