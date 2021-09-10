const button = document.getElementById("countButton");
const letterCounts = {};
const wordsCounts = {};
button.addEventListener('click', function() {  
    let typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    console.log(typedText)
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter]++; 
     }}
     for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }
     

  const words = typedText.split(/\s/);

  for (let j = 0; j < words.length; j++){
    currentWord = words[j]
    if (wordsCounts[currentWord] === undefined) {
        wordsCounts[currentWord] = 1; 
     } else { 
        wordsCounts[currentWord]++; 
     }
} 
for (word in wordsCounts){
     const span2 = document.createElement("span")
     const textContent2 = `"${word}": ${wordsCounts[word]}, `;
     span2.innerText  = textContent2;
     const boxwords = document.getElementById("wordsDiv");
     boxwords.appendChild(span2)

}
  console.log(wordsCounts)
});


