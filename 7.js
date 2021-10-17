//Q.7 How do you print duplicate characters from a string?

var str = "Shivani Lohar";
console.log("Duplicate Characters from a string are: ")
for(var i=0;i<str.length;i++){
  for(var j=i+1;j<str.length;j++){
    if(str[i]===str[j]){
      console.log(str[i])
    }
  }
  
}

printDuplicateChar()