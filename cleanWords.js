const fs = require('fs')
const words = []

const arrayRaw = fs.readFileSync('words.txt').toString().split('\n')
arrayRaw.forEach((word) => {
  if (word.length === 5) {
    const newValue = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    words.push(newValue)
  }
})
// console.log(`El archivo tiene ${arrayRaw.length} palabras, y guardamos ${words.length}`)
fs.writeFileSync("./src/assets/words.json", JSON.stringify(words, null, 4));
