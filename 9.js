//Q.9 How do you print the first non-repeated character from a string?

var firstNonRepeatedCharacter = function (str){   
for(i=0;i<str.length;i++){
     if(str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
       console.log(str.charAt(i));
       break;
     }
  }
}
firstNonRepeatedCharacter ("ankita");