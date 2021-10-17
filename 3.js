//Q.3 How do you find the largest and smallest number in an unsorted integer array?

// let arr=[5,2,14,26,3,19]
// let large = arr[0]
// let small = arr[0]
// let findLargeSmall= (arr) => {
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]>large){
//       large = arr[i]
//     }
//     else if(arr[i]< small) {
//       small = arr[i]
//     }
//   }
  
//   return {large,small}
// } 
// console.log(findLargeSmall(arr))

var arr=[5,2,14,26,3,19]

function find(a,b){
  
  if(a>b){
    return -1
  }
  else if(a<b){
    return 1
  }
  else{
    return 0
  }
}

arr.sort(find)
console.log("The Largest Number in an array is: ",arr[0])
console.log("The Smallest Number in an array is: ",arr[arr.length-1])
  