const fs = require('fs')
const readline = require('readline');
const file = "emoji.text"


async function processLineByLine() {
    const fileStream = fs.createReadStream(file);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const newData = []
    try {

        for await (const line of rl) {
            const arr = line.split("_")
            const key = arr[1].toLowerCase().replace(/ /g, "")
            newData.push({ text: arr[1], emoji: arr[0] })
        }

    } catch (error) {
        console.log(error)
    }
    fs.writeFileSync("../data.json", JSON.stringify(newData), (err) => console.log(err))
}




processLineByLine()