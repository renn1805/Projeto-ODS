const botaoAvancar = document.querySelector('.barraDireitaTexto')
const botaoVoltar = document.querySelector('.barraEsquerdaTexto')
const cards = document.querySelectorAll('.card')
const textoCards = document.querySelectorAll('.textoCards')

let cardTopo = document.querySelector('.cardTopo')

botaoAvancar.addEventListener('click', () => {
    switch (cardTopo) {
        case cards[0]:
            animacaoTopo2()
            break
        case cards[1]:
            animacaoTopo3()
            break
        case cards[2]:
            animacaoTopo4()
            break
        case cards[3]:
            animacaoTopo1()
            break
    }
    cardTopo = document.querySelector('.cardTopo')
    console.log(cards)
})

botaoVoltar.addEventListener('click', () => {
    switch (cardTopo) {
        case cards[0]:
            animacaoTopo4()
            break
        case cards[1]:
            animacaoTopo1()
            break
        case cards[2]:
            animacaoTopo2()
            break
        case cards[3]:
            animacaoTopo3()
            break
    }
    cardTopo = document.querySelector('.cardTopo')

})
function animacaoTopo2() {
    cards.forEach(card => {
        card.classList.remove('cardTopo', 'animacaoTopo3', 'animacaoTopo4')
        card.classList.add('animacaoTopo2')
    })
    cards[1].classList.add('cardTopo')

    textoCards.forEach(texto => {
        texto.style.display = 'none'
        texto.style.animation = ''

    })
    textoCards[1].style.display = 'block'
    textoCards[1].style.animation = 'animacaoTextoCard 1.2s ease-in-out'
}


function animacaoTopo3() {
    cards.forEach(card => {
        card.classList.remove('cardTopo', 'animacaoTopo2', 'animacaoTopo4')
        card.classList.add('animacaoTopo3')
    })
    cards[2].classList.add('cardTopo')

    textoCards.forEach(texto => {
        texto.style.display = 'none'
        texto.style.animation = ''

    })
    textoCards[2].style.display = 'block'
    textoCards[2].style.animation = 'animacaoTextoCard 1.2s ease-in-out'

}
function animacaoTopo4() {
    cards.forEach(card => {
        card.classList.remove('cardTopo', 'animacaoTopo2', 'animacaoTopo3')
        card.classList.add('animacaoTopo4')
    })
    cards[3].classList.add('cardTopo')

    textoCards.forEach(texto => {
        texto.style.display = 'none'
        texto.style.animation = ''

    })
    textoCards[3].style.display = 'block'
    textoCards[3].style.animation = 'animacaoTextoCard 1.2s ease-in-out'


}
function animacaoTopo1() {
    cards.forEach(card => {
        card.classList.remove('cardTopo', 'animacaoTopo2', 'animacaoTopo3', 'animacaoTopo4')
    })
    cards[0].classList.add('cardTopo')

    textoCards.forEach(texto => {
        texto.style.display = 'none'
        texto.style.animation = ''

    })
    textoCards[0].style.display = 'block'
    textoCards[0].style.animation = 'animacaoTextoCard 1.2s ease-in-out'


}
