const url = "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3"

async function scrapeData() {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const MA25 = $(".firstHeading")
        console.log(MA25.text())
        console.log("#SECOND")
        console.log(MA25)
    } catch(err) {
        console.error(err)
    }
}