
// brojevi = prompt()

// lista_brojeva = brojevi.split(',')


// for (let x of lista_brojeva){
//     lista_brojeva[lista_brojeva.indexOf(x)] = parseInt(x)
    
// }

// for (let x of lista_brojeva){
//     if (x % 15 === 0){
//         lista_brojeva[lista_brojeva.indexOf(x)] = 'FizzBuzz'
//     }
//     else if (x % 3 === 0){
//         lista_brojeva[lista_brojeva.indexOf(x)] = 'Fizz'
//     }
//     else if (x % 5 === 0){
//         lista_brojeva[lista_brojeva.indexOf(x)] = 'Buzz'
//     }
// }

// console.log(lista_brojeva)





// function comp(array1, array2){
//     var counter = 1;
//     for (el of array1){
//         if (array2.includes(el ** 2)){
//             counter++;
//             console.log(counter);
//         }
//         if (counter === array1.length){
//             return true;
//         }
//     }
//     return false;
// }


// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]


// console.log(comp(a1, a2));



// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//         if(num % i === 0)
//             return false;
//     return num > 1;
// }

// function isTwinPrime(n){
//     if (isPrime(n) && (isPrime(n - 2) || isPrime(n + 2))){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isTwinPrime(25));
// console.log(isPrime(27));


