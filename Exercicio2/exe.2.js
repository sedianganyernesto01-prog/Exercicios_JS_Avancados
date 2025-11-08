function flatten(array){
    return array.reduce((acc, val)=>
    Array.isArray(val) ? acc.concat(flatten(val)):acc.concat(val),[])
}

const arr=[1,[2,[3,4],5],6]
const flattenedArr=flatten(arr)
alert(`[${flattenedArr}]`)