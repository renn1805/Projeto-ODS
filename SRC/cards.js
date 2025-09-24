const conteiner = document.querySelector('.conteinerCards')
let cardTopo = document.querySelector('.cardTopo')
let cards = document.querySelectorAll('.card')

conteiner.addEventListener('click', () => {
    if (cardTopo == cards[0]) {
        animacao1Para2Card()
    } else if (cardTopo == cards[1]) {
        animacao2Para3Card()
    } else if (cardTopo == cards[2]) {
        animacao3Para4Card()
    } else {
        animacao4Para1Card()
    }
    cardTopo = document.querySelector('.cardTopo')
})

function animacao1Para2Card() {
    cards.forEach(card => {
        card.classList.add('animacaoCard1para2')
    })
    cards[0].classList.remove('cardTopo')
    cards[1].classList.add('cardTopo')
}

function animacao2Para3Card() {
    cards.forEach(card => {
        card.classList.add('animacaoCard2para3')
    })
    cards[1].classList.remove('cardTopo')
    cards[2].classList.add('cardTopo')
}
function animacao3Para4Card() {
    cards.forEach(card => {
        card.classList.add('animacaoCard3para4')
    })
    cards[2].classList.remove('cardTopo')
    cards[3].classList.add('cardTopo')

}
function animacao4Para1Card() {
    cards.forEach(card => {
        card.classList.remove('animacaoCard2para3', 'animacaoCard1para2', 'animacaoCard3para4')
    })
    cards[3].classList.remove('cardTopo')
    cards[0].classList.add('cardTopo')

}
