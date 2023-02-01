// "Ala ma kota. Ania ma psa! Sth sth sth? Damn. Something" -> Rozdzielam nieobrobiony string po znakach kończących zdanie -> ["Ala ma kota", "Ania ma psa" "Sth sth sth", "Something"]
// "Ala ma kota. Ania ma psa! Sth sth sth? Damn. Something" -> Z nieobrobionego stringa wyciągam znaki kończące zdanie (regexem) -> [".", "!", "?", "."]
// ["Ala ma kota", "Ania ma psa" "Sth sth sth", "Damn" ,"Something"] -> Iteruje po tablicy uzupełniając zdania w oparciu znaki kończące -> ["Ala ma kota.", "Ania ma psa!" "Sth sth sth?", "Damn." "Something"]
// ["Ala ma kota.", "Ania ma psa!" "Sth sth sth?", "Damn." "Something"] -> Rozdzielam elementy nowo uzyskanej tablicy na subTablice po spacji -> [["Ala", "ma", "kota."], ["Ania", "ma", "psa!"] ["Sth", "sth", "sth?"], ["Damn."], ["Something"]]
// [["Ala", "ma", "kota."], ["Ania", "ma", "psa!"] ["Sth", "sth", "sth?"], ["Damn."], ["Something"]]

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
