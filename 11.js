//Q.11 How do you check if a string contains only digits?

function check(value){
    let result = /^\d+$/.test(value);
    if(result===true){
      console.log("Contains only digits")
    }else{
      console.log("Does not contain only digits")
    }
    
  }
   check("123abc")