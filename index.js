const prompt = require('prompt-sync')()
// EX 1
// let number1= parseInt(prompt("Veuillez rentrer une valeur :", 0))
// let number2= parseInt(prompt("Veuillez rentrer une autre valeur :", 0))
// if  (number1 > number2){
//     console.log(number2);
// }
// else {
//     console.log(number1);
// }

// EX 2
// let number1= parseInt(prompt("Veuillez rentrer une valeur :", 0))
// let number2= parseInt(prompt("Veuillez rentrer une autre valeur :", 0))
// if ((number1 * number2) <= 0) {
//     console.log("produit negatif");

//     // Negatif
// } else {
//     console.log("produit positif");

//     // positif
// }

// EX3
// let temp = parseInt(prompt("Veuillez rentrer une valeur :", 0))
// if (temp < 0) {
//     console.log("c'est de la glace")
// } else if (temp > 0 && temp < 60) {
//     console.log("c'est de l'eau");
// } else {
//     console.log("c'est de la vapeur");
// }

// EX 4
// let number1 = parseInt(prompt("Veuillez rentrer une valeur :", 0))

// let total = 0;

// for (let index = 1; index <= number1; index++) {
//     if (index > 0 && index <=10){
//         total += 20  
//     } else if (index > 10 && index <=30){
//         total += 15
//     } else {
//         total += 5
//     }   
// }

// console.log(total)

// EX 5
// let age = parseInt(prompt("Rentrez votre age :", 0))
// let gender = prompt("Indiquez votre sexe :", 'male')

// if (gender == "male" && age > 20) {
//     console.log("tu paies des impots car t'es un homme");
// } else if (gender == "female" && (age >= 18 && age <= 35)) {
//     console.log("tu paies des impots car t'es jeune"); 
// } else {
//     console.log("tu paies rien");
// }

// TD2 
// EX 1
// for (let index = 0; index <= 10; index++) {
//    console.log(index);

// }
// // EX 2
// let total = 0
// for (let index = 0; index < 100; index++) {
//     console.log(total + " + " + index + " = " + parseInt(total + index + 1));
//     total += index + 1
//     console.log(total);
// }


// EX 3
// let nombre = parseInt(prompt("Rentrez un chiffre :", 0))
// if (nombre >= 1 && nombre <= 10) {
//     for (let index = 1; index <= 10; index++) {
//         console.log(nombre + " x " + index + " = " + parseInt(index * nombre));
//     }
// } else {
//     console.log(" Veuillez rentrez une valeur entre 1 et 10")
// }

// EX 4

// let ligne = 1;

// for (let index = 0; index < 5; index++) {
//     if (index === 0) {
//         console.log(ligne)
//         continue;
//     }

//     console.log(parseInt(10 ** index + ligne));
//     ligne =+ (parseInt(10 ** index + ligne))
// }

// TD3 

// EX2
// for (let index = 60; index >= 0; index--) {
//     console.log(index);
// }

// EXO 3

// let base = 0

// for (let index = 0; index < 9;  index++) {
//     console.log(parseInt((index + 1) * 3) + 150 + base);
//    base += (parseInt((index + 1) * 3) + 150 ); 
// }

// EXO 4

// let max = null;
// let maxpos = -2;
// for (let index = 0; index < 20; index++) {

//     let number = parseInt(prompt("Veuillez rentrer une valeur " + (index + 1) + ":"));
//     if (max === null || number > max) {
//         max = number
//         maxpos = index + 1;
//     }
// }
// console.log(("Le nombre rentré le plus grand parmi les 20 saisis est : " + max + ", ce nombre a été rentré  à la : " + maxpos + "ème position "));

// EXO 5
// let person = 0;
// for (let index = 0; index < 6; index++) {
//     let size = parseFloat(prompt("Veuillez rentrez une taille " + (index + 1) + ":"));
//     if (size < 2.1) {
//         person++;
//     }
// }
// console.log(person + "personnes mesurent moins de 2.10m");

// // EXO 6

    
// function calculatePercent(result, number)
// {
//     return ((result * 100) / number);
// }

// let n = parseInt(prompt("Saisir le nombre d'électeurs :"));
// let yes = 0;
// let no = 0;
// let white = 0;

// for (let index = 1; index <= n; index++) {
//     let vote = prompt("Vote de l'électeur " + index + "(Y/N/W) : ")
//     if (vote === 'Y') {
//         yes++;
//     }
//     else if (vote === 'N') {
//         no++;
//     }
//     else if (vote === 'W') {
//         white++;
//     }
//     else {
//         console.log("Erreur vous pouvez seulement voter Y/N/W"); index--
//     }
    
// }

// console.log((calculatePercent(yes, n) + " % Y ") + (calculatePercent(no, n)+ " % N ") + (calculatePercent(white, n) + " % W "));

// EXO 7


// function isPrime(number) {
//   if (number <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }

// function generatePrimeNumber(n) {
//     const primes = [];
//     let number = 2;
        
//     while (primes.length < n) {
//         if (isPrime(number)) {
//             primes.push(number)
//         }

//         number++;
//     }

//     return primes;
// }

// let n = parseInt(prompt('Saisir un nombre : '));
// console.log(generatePrimeNumber(n));


// EXO 8

// let number = parseInt(prompt('Saisir un nombre : '));
// for (let index = number; index < (number + 6); index++) {
//     while (index !== number + 6) {
//         console.log(index);
//         index++;
//     }
// }

// EXO 9 

// let p = 50 
// brouillon


// function paris(number) {
//     number = number + 100
//     return number
// }

// let n = 200

// function nantes(number) {
//     number = number * 1.12
//     return number
// }

// let years = 0;
// while (n > p) {
  
//     console.log((paris(p)) + " voitures dans le garage de paris" + (nantes(n)) + "voitures dans le garage de nantes");
//     years++;
// }
// console.log(years);


// au propre


// let years = 0;
// let carsInParisGarage = 50;
// let carsInNantesGarage = 200;

// function incrementCars(carsInGarage, city) {
// 	if (city === 'nantes') {
// 		return carsInGarage * 1.12;
// 	}

// 	return carsInGarage + 100;
// }

// while (carsInParisGarage < carsInNantesGarage && years < 100) {
// 	carsInParisGarage = incrementCars(carsInParisGarage, 'paris');
// 	carsInNantesGarage = incrementCars(carsInNantesGarage, 'nantes');
// 	years++;
// }

// console.log(`Il a fallu ${years} années pour que le nombre de voitures à Paris dépasse celui de Nantes.`);

// EXO 10

// function sumSquareNumber(numbers) {
// 	let result = 0;

// 	numbers.forEach((number, i) => {
//         if (i === 0) {
//             result = number**2
//         } else {
//             result = (result) * number**2;
//         }
//     })

// 	return result;
// }

// let number = parseInt(prompt('Saisir un nombre : '));

// const numbersToSum = [];

// for (let index = 2; index <= number * 2; index += 2) {
// 	numbersToSum.push(index)
// }

// console.log(`${numbersToSum.join('² x ')}² = ${sumSquareNumber(numbersToSum)}`)