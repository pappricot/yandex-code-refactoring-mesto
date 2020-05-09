class CardList {
  constructor(initialCards) {
    this.playList = document.querySelector('.places-list')
    this.cards = initialCards
    this.render()
  }
  addCard = item => {
    const newCard = new Card(item)
    this.playList.appendChild(newCard.card)
  }

  render = () => {
    this.cards.forEach(item => {
      this.addCard(item)
    })
  }
}
