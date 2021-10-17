//Q.5 How do you find duplicate numbers in an array if it contains multiple duplicates?

var arr = [1,2,3,2,5,1,6,4,3,3];
var data={};
for(var i=0; i<arr.length;i++){
      if(data[arr[i]]===undefined){
        data[arr[i]]=1
      }else{
        data[arr[i]]+=1;
      }
      if(i==arr.length-1)
      {
        for(x in data)
        {
          if(data[x]==1){
            delete data[x]
          }
        }
      }
}
console.log(data)