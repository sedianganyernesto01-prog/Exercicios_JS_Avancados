const numCartas=8
const pares=numCartas/2
const divTabuleiro=document.getElementById("tabuleiro")

let cartas=[]
let cartasViradas=[]
let tentativas=0
const maxTentativas=15

function criarCartas(){
    let valores=[]
    for (let i=1; i<=pares; i++)valores.push(i, 1)
        return valores.sort(()=> Math.random()-0.5)
}


function criarTabuleiro(){
    const valores=criarCartas()
    for(let i=0; i<numCartas; i++){
        const carta=document.createElement("div")
        carta.classList.add("carta")
        carta.dataset.valor=valores[i]
        carta.textContent=""
        carta.addEventListener("click",virarCarta)
        divTabuleiro.appendChild(carta)
        cartas.push(carta)
    }
}

function virarCarta(e){
    if(cartasViradas.length>=2)
        return 
    const carta=e.target
    if(carta.classList.contains("vira"))
        return
    carta.classList.add("vira")
    carta.textContent=carta.dataset.valor
    cartasViradas.push(carta)

    if(cartasViradas.length===2){
        tentativas++
        if(cartasViradas[0].dataset.valor===cartasViradas[1].dataset.valor){
            cartasViradas=[]
            checarFim()
        }
        else{
            setTimeout(()=>{
                cartasViradas.forEach(card=>{
                    card.classList.remove("vira")
                    card.textContent=""
                })
                cartasViradas=[]
                if(tentativas>=maxTentativas){
                    alert(`Fim de jogo! Voce usou ${tentativas} tentativas.`)
                    resetarJogo()
                }
            },1000)
        }
    }

}

function checarFim(){
    const cartasEntradas=cartas.filter(c=>c.classList.contains("vira")).length
    if(cartasEntradas===numCartas){
        alert(`Parabéns! Voce completou o jogo em ${tentativas} tentativas.`)
        resetarJogo()
    }
}

function resetarJogo(){
    cartas=[]
    cartasViradas=[]
    tentativas=0
    divTabuleiro.innerHTML=""
    criarTabuleiro()
}
criarTabuleiro()