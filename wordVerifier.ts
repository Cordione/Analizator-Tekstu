export function checkWords(sentence: string) {
  //Regexes to validate words:
  const haveAtLeastOneLetter = /[A-Za-z]/;
  const haveSpecialCharacters = /[$&+:;=@#|'<>^*()%-]/;
  //Regex to validate ending characters
  const ending = /[!.?]/;
  //Split sentence by Space
  const splitedSentence = sentence.split(" ").filter((x) => x.match(haveAtLeastOneLetter) && !x.match(haveSpecialCharacters));
  let isSentence: boolean = false;
  if (splitedSentence.length > 1) {
    isSentence = true;
  } else if (splitedSentence.length == 1) {
    const length = splitedSentence[0].length - 1;
    if (splitedSentence[0][length].match(ending)) {
      isSentence = true;
    }
  }
  // 1 case: "Ala ma kota." kilka słów z terminatorem
  // "Ala ma kota." -> rozdzielam input po spacjach -> "Ala", "ma", "kota."
  // "ala", "ma", "kota." -> filtruje otrzymane elementy Regexem by sprawdzić czy są słowami (co najmniej 1 litera, brak znaków specjalnych) -> "ala", "ma", "kota."
  // "ala", "ma", "kota." -> sprawdzam długość pozostałej tablicy -> 3
  // Długość otrzymanej tablicy jest większa od 1 także jest to zdanie
  // Będzie to wyglądało analogicznie w przypadkach, gdy na końcu będzie występować ? !

  // 2 case: "Ala ma kota" kilka słów bez terminatora
  // "Ala ma kota." -> rozdzielam input po spacjach -> "Ala", "ma", "kota"
  // "ala", "ma", "kota" -> filtruje otrzymane elementy Regexem by sprawdzić czy są słowami (co najmniej 1 litera, brak znaków specjalnych) -> "ala", "ma", "kota"
  // "ala", "ma", "kota" -> sprawdzam długość pozostałej tablicy -> 3
  // Długość otrzymanej tablicy jest większa od 1 także jest to zdanie

  // 3 case: "Damn." - 1 słowo z terminatorem
  // "Damn." -> filtruje otrzymane elementy Regexem by sprawdzić czy są słowami (co najmniej 1 litera, brak znaków specjalnych) -> "Damn."
  // "Damn." -> długość wynosi 1 -> sprawdzam czy w ostatnim indexie znajduje się znak kończący zdanie -> znajduje się, także jest to zdanie.

  // 4 case: "Something" - 1 słowo bez terminatora.
  // "Something" -> filtruje otrzymane elementy Regexem by sprawdzić czy są słowami (co najmniej 1 litera, brak znaków specjalnych) -> "Something"
  // "Something" -> długość wynosi 1 -> sprawdzam czy w ostatnim indexie znajduje się znak kończący zdanie -> nie ma, nie jest to zdanie.

  // 5 case: pusty input ""
  // "" ->  length < 1 -> nie jest to zdanie

  // 6 case: "Ala ma k@ta"
  // "Ala ma k@ta." -> rozdzielam input po spacjach -> "Ala", "ma", "k@ta."
  // "Ala", "ma", "k@ta." -> filtruje otrzymane elementy Regexem by sprawdzić czy są słowami (co najmniej 1 litera, brak znaków specjalnych) -> "Ala", "ma"
  // "Ala", "ma" -> sprawdzam długość, > 1 -> jest zdaniem

  return isSentence ? splitedSentence.join(" ") : "";
}

console.log(checkWords("Ala ma kota."));
console.log(checkWords("Ala ma kota"));
console.log(checkWords("Damn."));
console.log(checkWords("Something"));
console.log(checkWords(""));
console.log(checkWords("Ala ma k@ta"));
console.log(checkWords("Ala k@t"));
console.log(checkWords("1234."));
console.log(checkWords("..."));
