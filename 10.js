//Q.10 How can a given string be reversed using recursion?
 
function reverse_string(str){
    let new_string = "";
    for(let i = str.length-1; i >= 0; i--)
      {
      new_string += str[i];
    }
    return new_string;
  }
  
  console.log(reverse_string("Hello"))