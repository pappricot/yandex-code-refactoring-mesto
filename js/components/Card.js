class Card {
  constructor(item) {
    // this.like = this.like.bind(this)
    // this.remove = this.remove.bind(this)

    this.link = item.link
    this.name = item.name

    this.card = this.create(this.link, this.name) // create DOM

    // dealing with like button
    // this.card
    //   .queySelector('.place-card__like-icon')
    //   .addEventListener('click', this.like)

    // //dealingh with remove button
    // this.card
    //   .queySelector('.place-card__delete-icon')
    //   .addEventListener('click', this.remove)
  }

  create = (link, name) => {
    //формируем все элементы
    const oneCard = document.createElement('div')
    oneCard.classList.add('place-card')

    const imgCard = document.createElement('div')
    imgCard.classList.add('place-card__image')
    imgCard.style.backgroundImage = `url(${link})`

    const btnImgCard = document.createElement('button')
    btnImgCard.classList.add('place-card__delete-icon')

    const descCard = document.createElement('div')
    descCard.classList.add('place-card__description')

    const h3Card = document.createElement('h3')
    h3Card.classList.add('place-card__name')
    h3Card.textContent = name

    const btnLike = document.createElement('button')
    btnLike.classList.add('place-card__like-icon')

    //сливаем их в один
    oneCard.appendChild(imgCard)
    imgCard.appendChild(btnImgCard)
    oneCard.appendChild(descCard)
    descCard.appendChild(h3Card)
    descCard.appendChild(btnLike)

    //добавляем карточку на страницу
    const cards = document.querySelector('.places-list')
    cards.appendChild(oneCard)
    return cards
  }
}
