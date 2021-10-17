//Q.13 How do you count a number of vowels and consonants in a given string?

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
  let counts = 0;
  for(let i = 0; i < vowels.length; i++) {
    if(vowels.includes(sentence[i])) {
      counts++;
    }
  }
  var consonants = (sentence.length) - counts
  if(counts>0){
    console.log("Consonants = ",consonants)
    return console.log("Vowels = ", counts);
  }
}

countVowels('instruction');