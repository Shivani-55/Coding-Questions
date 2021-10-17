//Q.18 How do you check if a given string is a palindrome?

function palindrome(str) 
{
    var palin = str.split("").reverse().join("");

    if (palin === str){
        console.log("Given String is a Palindrome");
    } else {
        console.log("Given String is not a Palindrome");
    }
}   

palindrome("eyes");