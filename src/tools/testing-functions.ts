export const randomNonNumericalCharacter = (): string => {
  const nonNumericCharsArray: number[] = 
  [
    33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43, 44,
    45,  46,  58,  59,  60,  61,  62,  63,  64,  65,  66, 67,
    68,  69,  70,  71,  72,  73,  74,  75,  76,  77,  78, 79,
    80,  81,  82,  83,  84,  85,  86,  87,  88,  89,  90, 91,
    92,  93,  94,  95,  96,  97,  98,  99, 100, 101, 102, 103,
    104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126
  ]
  return String.fromCharCode(nonNumericCharsArray[Math.round(Math.random() * nonNumericCharsArray.length)]);
};

export const randomAlphabeticalCharacter = () => {
  const alphabeticalCharArray: number[] = [
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
    75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 
    85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 
    101, 102, 103, 104, 105, 106, 107, 108,
    109, 110, 111, 112, 113, 114, 115, 116,
    117, 118, 119, 120, 121, 122
  ]
  return String.fromCharCode(alphabeticalCharArray[Math.round(Math.random() * alphabeticalCharArray.length)]);
}

export const generateRandomString = (_length: number = 6, _alphabetical: boolean = false): string => {
  const word: string[] = [];
  for(let i = 0; i < _length; i++){
    word.push(_alphabetical ? randomAlphabeticalCharacter() : randomNonNumericalCharacter());
  }
  return word.join("");
}

export const generateRandomSentence = (_words: number = 4, _spaces: boolean = true, _alphabetical: boolean = false) => {
  const sentence: string[] = [];
  for(let i = 0; i < _words; i++){
    const word: string[] = [];
    sentence.push(_alphabetical ? generateRandomString(Math.ceil(Math.random()*12), true) : generateRandomString(Math.ceil(Math.random()*12)));
  }
  return sentence.join(_spaces ? " " : "");
}
