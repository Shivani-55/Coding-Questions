//----Q.1 How do you find the missing number in a given integer array of 1 to //100?--------

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
var missingElem = [];
for( var i=0 ; i<array.length; i++ ){

    // For single missing element between two numbers

    // if(i==array.length-1){
    //     break;   
    // }
    // if(array[i]+1 !== array[i+1]){
    //     missingElem.push(array[i]+1)
        
    // } 

    // For Multiple missing element between two numbers
    
    if( array[i] - array[i-1] > 1 ){
        if( array[i] - array[i-1] > 2 ){
            var diff = array[i]-array[i-1]-1 ;

            for( var j=1; j<=diff; j++ ){
                missingElem.push(array[i-1]+j)
            }
        }else{
            missingElem.push(array[i-1]+1)
        }
    }
}

if(missingElem.length==0){
    console.log("null")
}

else if(missingElem.length==1)
{
    console.log(missingElem[0])
}
else{
    console.log(missingElem)
}