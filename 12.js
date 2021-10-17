//Q.12 How are duplicate characters found in a string?

var string = "Shivani Lohar"
console.log("Duplicate Characters in a string are: ")
function printDuplicateChar(){
  for(var i=0; i<string.length; i++){
    for(var j=i+1; j<string.length; j++){
      if(string[j]===string[i]){
        console.log(string[i]);
      }
    }
      
  }
}
printDuplicateChar()