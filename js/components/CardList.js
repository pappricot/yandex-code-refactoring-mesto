class CardList {
  constructor(cards, initialCards) {
    this.cards = cards
    this.initialCards = initialCards
    this.render()
  }
  addCard = item => {
    this.initialCards.push(item)
    this.cards.appendChild(item.create())
  }

  render = () => {
    this.initialCards.forEach(item => {
      this.cards.appendChild(item.create())
    })
  }
}
