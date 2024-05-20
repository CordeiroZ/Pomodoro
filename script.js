const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')     // Transforma o valor atribuito a string do html
    banner.setAttribute('src', '/imagens/gengar3.jpg')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', '/imagens/jiggy.png')                          
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', '/imagens/snorlax.png')  
})



