/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/

let vardas = "Jonas";
let pavarde = "Jonaitis";
let trumpesnis = (vardas.length < pavarde.length) ? vardas : pavarde;
console.log(trumpesnis);


/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/

let vardas1 = "Jonas";
let pavarde1 = "Jonaitis";
console.log(vardas1.toUpperCase() + " " + pavarde1.toLowerCase());

/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

let vardas2 = "Jonas";
let pavarde2 = "Jonaitis";
let pirmosRaides = vardas2 [0] + pavarde2 [0];
console.log(pirmosRaides);

/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/

let vardas3 = "Jonas";
let pavarde3 = "Jonaitis";
console.log(vardas3.substring(vardas3.length - 3) + pavarde3.substring(pavarde3.length - 3));


/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/
let tekstas = "An American in Paris";
let naujasTekstas = tekstas.replace(/a/gi, "*");
console.log(naujasTekstas);



/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/

let tekstas2 = "An American in Paris";
let naujasTekstas2 = tekstas2.replace(/[aeiou]/gi, "");
console.log(naujasTekstas2);

let tekstas3 = "Breakfast at Tiffany's";
let naujasTekstas3 = tekstas3.replace(/[aeiou]/gi, "");
console.log(naujasTekstas3);

let tekstas4 = "2001: A Space Odyssey";
let naujasTekstas4 = tekstas4.replace(/[aeiou]/gi, "");
console.log(naujasTekstas4);

let tesktas5 = "It's a Wonderful Life";
let naujasTesktas5 = tesktas5.replace(/[aeiou]/gi, "");
console.log(naujasTesktas5);



/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/

let epizodas = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random() * 10)) + (Math.ceil(Math.random() * 7) + 1) + " - A New Hope";
let epizodoNumeris = epizodas.match(/\d+/)[0];
console.log("Epizodo numeris: " + epizodoNumeris);


/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/

let tekstas6 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
let zodziai = tekstas6.split(" ");
let trumpiZodziai = zodziai.filter(zodis => zodis.length <= 5);
console.log("Zodziu trumpesniu ar lygiu 5 raidems: " + trumpiZodziai.length);

let tekstas7 = "Tik nereikia gasdinti Pietu Centro, geriant sultis pas save kvartale";
let zodziai2 = tekstas7.split(" ");
let trumpiZodziai1 = zodziai2.filter(zodis1 => zodis1.length <= 5);
console.log("Zodziu trumpesniu ar lygiu 5 raidems: " + trumpiZodziai1.length);


/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/

 

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/