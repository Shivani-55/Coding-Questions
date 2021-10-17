//Q.8 How do you check if two strings are anagrams of each other?

function checkAnagram(string1, string2) {
   if(string1.length !== string2.length){
      console.log('Invalid Input');
      return
   }
   let str1 = string1.split('').sort().join('');
   let str2 = string2.split('').sort().join('');
   if(str1 === str2){
      console.log("Strings are Anagram of each other");
   } else { 
      console.log("Strings are not Anagram of each other");
   }
}
checkAnagram("indian","ndiani")