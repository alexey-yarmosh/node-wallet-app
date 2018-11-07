const fs = require('fs')

fs.writeFileSync('./source/data/transactions.json', '[]')

const cards = JSON.parse(fs.readFileSync('./source/data/cards.json', 'utf-8'))
cards.forEach(card => {
  if (card.id === 1) {
    card.balance = 10000
  } else {
    card.balance = 0
  }
})
fs.writeFileSync('./source/data/cards.json', JSON.stringify(cards, null, 2))
