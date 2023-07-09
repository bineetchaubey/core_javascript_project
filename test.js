
function removeDuplicat (arra){
    for(var i=0;i<arra.length ; i++){
        var findvalue  =  arra[i]
        if(findvalue){
            if(arra.indexOf(findvalue) !== i){
            var index =  arra.indexOf(findvalue)
                arra.splice(index,1)
            }
        }
    }
    return arra;

}

var uniqueArray =  removeDuplicat(inputArray)
 // console.log(uniqueArray, uniqueArray)



function sortinSigleloop(arr){

    for(j=0;j < arr.length ;){
        console.log("loop",j)
        if(arr[j] > arr[j+1] ){
            // swap elemtn
            var temp  = arr[j] 
            arr[j]  = arr[j+1] 
            arr[j+1] = temp 
            j--
            // console.log("loop",arr)
        }else{
            j++
        }
    }
    /// console.log('sorted_arrat',arr)
    return arr ;
}

var sorted_array = sortinSigleloop(uniqueArray)
console.log(sorted_array)
