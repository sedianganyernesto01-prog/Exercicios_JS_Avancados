async function executarFila(funcoes) {
    const resultados=[]

    for(const func of funcoes){
        const resultado=await func()
        resultados.push(resultado)
    }
    alert(resultados.join(", "))
}

async function teste(){
    const f1=()=> new Promise(r=> setTimeout(()=> r("Primeira"),1000))
    const f2=()=> new Promise(r=> setTimeout(()=> r("Segunda"),500))
    await executarFila([f1, f2])
}
teste()