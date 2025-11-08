function deepClone(obj){
    if(obj===null || typeof obj!=="object"){
        return obj
    }

    if(Array.isArray(obj)){
        const arrCopy=[]
        for(let item of obj){
            arrCopy.push(deepClone(item))
        }
        return arrCopy
    }
    const objCopy={}
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                objCopy[key]=deepClone(obj[key])
            }
    }
    return objCopy
}

const obj={
    nome:"Sediangany",
    enderco:{
        cidade:"Luanda"
    }
}
const clone=deepClone(obj)
clone.nome="Nelson"
clone.enderco.cidade="Lisboa"
alert(`Original:${JSON.stringify(obj)}\nClone: ${JSON.stringify(clone)}`)