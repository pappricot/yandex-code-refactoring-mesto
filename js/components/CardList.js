class CardList {
  constructor(playList, initialCards) {
    this.playList = playList
    this.cards = initialCards
    this.render()
  }
  addCard = item => {
    this.cards.push(item)
    this.playList.appendChild(item.create())
  }

  render = () => {
    this.cards.forEach(item => {
      this.playList.appendChild(item.create())
    })
  }
}
