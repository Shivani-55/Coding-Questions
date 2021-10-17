
//Q.2 How do you find the duplicate number on a given integer array?
  
var arr=[1,2,4,2,5,4,1];
console.log("Duplicate numbers in array are: ");
for(var i=0; i<arr.length; i++){
  for(var j=i+1; j<arr.length; j++){
    if(arr[i]===arr[j]){
      console.log(arr[j])
    }
  }
}