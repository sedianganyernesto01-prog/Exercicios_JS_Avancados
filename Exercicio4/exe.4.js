function flattenObject(obj, parentKey="", result={}){
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            const newKey=parentKey ? `${parentKey}.${key}`:key
            if(typeof obj[key]=="object" && obj[key] !==null && !Array.isArray(obj[key])){
               flattenObject(obj[key],newKey, result)
            }
            else{
                result[newKey]=obj[key]
            }
        }
    }
    return result
}

const nestedObj={user:{name:"Sediangany", ane:19}}
const flatObj=flattenObject(nestedObj)
alert(JSON.stringify(flatObj))