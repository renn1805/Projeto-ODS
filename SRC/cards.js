
const botaoAvancar = document.querySelector('.barraDireitaTexto')//? seleciona o batao de avançar
const botaoVoltar = document.querySelector('.barraEsquerdaTexto')//? seleciona o batao de voltar
const cards = document.querySelectorAll('.card')   //? forma um array com todos os cards por ordem de aparecimento
const textoCards = document.querySelectorAll('.textoCards') //? forma um array com todos os textos referentes aos cards

//? é um função que é disparada ao clicar em avançar
botaoAvancar.addEventListener('click', () => {
    let cardTopo = document.querySelector('.cardTopo')//? atribui o cart topo atual toda vez que a função é disparada

    //? é uma separação de casos, cada caso é definido por card no topo
    switch (cardTopo) {
        case cards[0]:
            animacaoTopo2()     //? quando o card topo é o primeiro do array a função chamada é a que deixa o segundo como card topo. 
            break
        case cards[1]:
            animacaoTopo3()     //? qando o segundo card esta no topo a função chamada é a que coloca o terceiro como topo. E isso continua para cada caso de avanço
            break
        case cards[2]:
            animacaoTopo4()
            break
        case cards[3]:
            animacaoTopo1()     //? quando o ultimo card esta no topo a função chamada deixa o primeiro de volta ao topo
            break
    }
})

//? essa função faz com que os cards passem para o anterior
botaoVoltar.addEventListener('click', () => {
    let cardTopo = document.querySelector('.cardTopo') //? como na função de avançar ele começa redefinindo a variavel "card topo"

    //? faz a mesma checagem da função de avançar só que com funções diferentes
    switch (cardTopo) {
        case cards[0]:
            animacaoTopo4() //? se o card topo for o primeiro o program tem que voltar para o ultimo (o anterior desse). e assim continua para todos os outros casos
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

})

// funções de animação

function animacaoTopo2() {
    //? o forEach passa por todos os itens do array removendo todas as classe de "cardTopo" e das outras animações e depois adiciona a todos os cards a class da respectiva animação
    cards.forEach(card => {
        card.classList.remove('cardTopo', 'animacaoTopo3', 'animacaoTopo4')
        card.classList.add('animacaoTopo2')
    })
    
    cards[1].classList.add('cardTopo')      //? após o forEach fazer suas funções eu adiciono a classe de carTopo ao card que vai ficar no topo durante essa animação

    //? esse forEach basicamente tem as mesmas funções que o outro, ele retira todos os texto da tela e todas as animções de keyFrames para depois por em apenas no que tem que ficar na tela
    textoCards.forEach(texto => {
        texto.style.display = 'none'
        texto.style.animation = ''

    })

    //?adiciona o texto certo na tela
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

//? essa é a unica function que foge do padrão de funcionamento, ao invez dela adicionar um animção no final, ela apenas tira todas as classes de animação de todos os cards, pois assim eles voltam ao esta inicial
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
