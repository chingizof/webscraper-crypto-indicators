const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require("fs")

//my unsuccessful tries of hacking TradingView and Binance

// const url = "https://www.binance.com/ru/futures/BTCUSDT"
const url = "https://www.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT"

// async function scrapeData() {
//     try {
//         const { data } = await axios.get(url)
//         const $ = cheerio.load(data)
//         const MA25 = $(".css-11y6cix") //".css-11y6cix" works
        
//         console.log("#SECOND")
//         console.log(MA25.next().next().children()[0])
//     } catch(err) {
//         console.error(err)
//     }
// }

async function scrapeData() {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const MA25 = $("div.valueValue-OYqjX7Sg") //".css-11y6cix" works
        
        console.log("#VALUE")
        console.log(MA25)
    } catch(err) {
        console.error(err)
    }
}


scrapeData()