const jogadores=[
    {nome:"Mbampé", pontos:200},
    {nome:"Ronaldo", pontos:500},
    {nome:"Messi", pontos:400}
]
 
jogadores.sort((a,b)=> b.pontos-a.pontos)
const rankingList=document.getElementById("rankingList")
let resultadoTexto=""

jogadores.forEach((jogador, index)=>{
    const li =document.createElement("li")
    li.textContent=`${index+1}º ${jogador.nome} - ${jogador.pontos} pontos`
    rankingList.appendChild(li)
    resultadoTexto+=`${index+1}º ${jogador.nome}\n`
})

alert("Ranking Final:\n"+ resultadoTexto)