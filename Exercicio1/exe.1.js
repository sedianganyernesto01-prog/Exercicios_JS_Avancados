
function top3Mais(arr){
    const contagem={};

for(const num of arr){
    contagem[num]=(contagem[num]||0)+1

}

const ordenado=Object.entries(contagem).sort((a,b)=> b[1]-a[1])
const top3=ordenado.slice(0, 3)
let mensagem="Top 3 números mais frequentes:\n"

top3.forEach(([num, freq],i)=>{
    mensagem+=`${i+1}.Número ${num}: ${freq} vezes\n`
})
alert(mensagem)
}

const numeros=[1,1,1,3,3,3,3,2,4,4,4,4,4,5,5]
top3Mais(numeros)