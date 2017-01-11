// return the position(s) of each character

// Returns an object of the stats for the sentence given {character: position}

function clean(sentence) {
  var splitSentence = sentence.split(" ").join("").toLowerCase();
  return splitSentence;
}


function characterPosition(sentence) {
  sentence = clean(sentence);
  //console.log(splitSentence);

  // Object for the letters to be added too.
  var letterList = {};
  //cycle thought each letter

  for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];

    //check is letter in keys and counts quantity
    if(letterList[letter] === undefined) {
      letterList[letter] = [i];
    }
    else
    {
      letterList[letter].push(i);
    }
  }
  return letterList;
}

console.log(characterPosition("Lighthouse in the house"));





