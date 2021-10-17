//Q.4 How do you find all pairs of an integer array whose sum is equal to a given number?

var arr= [1,2,3,4,5,6,7,8]
var sum= 8;
var obj={};
var result=[]
for(var i=0;i<arr.length;i++){
  for(var j=0;j<i;j++){
    if(arr[j]+arr[i]===sum){
      console.log("The pairs of given sum are: "+ arr[i] + " and " + arr[j])
    }
  }
}