
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




//Nije Zavrseno
// function canalMania(lowQueue, highQueue, lockLength) {
//     var time = 0;
//     var queue = 1;
//     while(true){
//         if (queue % 2 === 0){
            
//         }
//         else{

//         }
//     }
// }

// console.log([2, 3, 6, 1], [1, 2], 7);






// function paul(x){
//     var misery_score = 0
//     for (let el of x){
//         switch(el){
//             case 'life': misery_score += 0;
//             break;
//             case 'Petes kata': misery_score += 10;
//             break;
//             case 'kata': misery_score += 5;
//             break;
//             case 'eating': misery_score += 1;
//             break
//         }
//     }
//     if (misery_score < 40){
//         return 'Super happy!';
//     }
//     else if (misery_score >= 40 && misery_score < 70){
//         return 'Happy!';
//     }
//     else if (misery_score >= 70 && misery_score < 100){
//         return 'Sad!';
//     }
//     else if (misery_score > 100){
//         return 'Miserable!';
//     }
// }

// console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']));




