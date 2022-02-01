
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






// function Snail(mat){
//     x = mat[0].length;
//     y = mat.length;
//     var trail = []
//     let x1 = 0, y1 = 0;
//     while (x1 < x && y1 < y) {
//         for (let i = y1; i < y; i++){
//             trail.push(mat[x1][i]);
//         }
//         x1++;
//         for (let i = x1; i < x; i++){
//             trail.push(mat[i][y - 1])
//         }
//         y--;
//         if (x1 < x){
//             for (i = y - 1; i >= y1; --i){
//                 trail.push(mat[x - 1][i])
//             }
//         }
//         x--;
//         if (y1 < y){
//             for (i = x - 1; i >= x1; i--){
//                 trail.push(mat[i][y1])
//             }
//         }
//         y1++;
//     }
//     console.log(trail);
// }

// Snail([[1, 2, 3, 4, 5],
//        [6, 7, 8, 9, 10],
//        [11, 12, 13, 14, 15], 
//        [16, 17, 18, 19, 20], 
//        [21, 22, 23, 24, 25]])








// function solution(str){
//     var start = 0;
//     var end = 2;
//     char_lst = []
//     if (str.length % 2 === 0){
//         for(let i = 0; i < str.length / 2; i++){
//             char_lst.push(str.slice(start, end));
//             start += 2;
//             end += 2;
//         }
//         return char_lst
//     }
//     else {
//         for(let i = 0; i < str.length / 2 - 1; i++){
//             char_lst.push(str.slice(start, end));
//             start += 2;
//             end += 2;
//         }
//         char_lst.push(str[str.length - 1] + '_');
//         return char_lst
//     }
// }

// console.log(solution("abcdef"));
// console.log(solution("abcde"));






// function changer(str) {
//     new_str = '';
//     new_char = '';
//     for (let i = 0; i < str.length; i++){
//         if(Number(str[i]) || str[i] == 0){
//             new_str += str[i];
//         }
//         else {
//             if(str[i] == 'z' || str[i] == 'Z'){
//                 new_char = 'a';
//             }
//             else{
//                 new_char = String.fromCharCode(str.charCodeAt(i) + 1);
//             }
//             if (new_char == 'a' || new_char == 'A' || new_char == 'e' || new_char == 'E' || new_char == 'i' || new_char == 'I' || new_char == 'o' || new_char == 'O' || new_char == 'U' || new_char == 'u'){
//                 new_char = new_char.toUpperCase();
//             }
//             else {
//                 new_char = new_char.toLowerCase();
//             }
//             new_str += new_char;
//         }
//     }
//     return new_str;
// }

// console.log(changer('Cat30'));



// function humanReadable (seconds) {
//     let mins = Math.floor(seconds / 60);
//     let hours = Math.floor(mins / 60);
//     seconds = seconds - mins * 60;
//     mins = mins - hours * 60;
//     if (seconds < 10) seconds = '0' + seconds;
//     if (mins < 10) mins = '0' + mins;
//     if (hours < 10) hours = '0' + hours;
//     return hours + ':' + mins + ':' + seconds;
// }

// console.log(humanReadable(3600));




// var moveZeros = function (arr) {
//     // zeros = 0
//     // arr = arr.filter((item) => {
//     //     if (item === 0 && typeof(item) === typeof(1)){
//     //         zeros++
//     //     }
//     //     else {
//     //         return item
//     //     }
//     // })
//     // for (let i = 0; i < zeros; i ++){
//     //     arr.push(0);
//     // }
//     // return arr
//     let index = 0;
//     while (true){
//         if (arr[index] == 0){
//             arr.splice(index, index);
//             index++;
//             continue;
//         }
//         else if (index === arr.length){
//             return arr;
//         }
//     }
// }
// ar = [1, 2, false, null, 1]
// console.log(ar.toString());
// // console.log(moveZeros([1,2,0,1,0,1,false,0,3,0,1]));



// function Sredi(s){
//     arr = s.split(' ');
//     new_arr = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !== arr[i + 1]){
//             new_arr.push(arr[i])
//         }
//     }
//     str = '';
//     for (let item of new_arr){
//         str += item + ' ';
//     }
//     return str.trim();
// }

// console.log(Sredi('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));






// function proba(s){
//     if (s){
//         return 'nice'
//     }
//     else{
//         return +5;
//     }
// }

// console.log(proba());
// function five(state){
//     if (state){
//         switch(state[0]){
//             case '+': return 5 + parseInt(state[1]);
//             case '-': return 5 - parseInt(state[1]);
//             case '*': return 5 * parseInt(state[1]);
//             case '/': return 5 / parseInt(state[1]);
//         }
//     }
//     else {
//         return 5;
//     }
// }

// function plus(num){
//     return '+' + num;
// }

// function one(state){
//     if (state){
//         switch(state[0]){
//             case '+': return 1 + parseInt(state[1]);
//         }
//     }
//     else {
//         return 1;
//     }
// }

// console.log(five(plus(one())));





// function same(array1, array2){
//     if (array1 && array2 && array1.length >= 1 && array2.length >= 1){
//         for (let j = 0; j < array1.length; j++){
//             console.log(array1[j]);
//             if (array2.includes(array1[j] ** 2)){
//                 // array2.splice(array2.indexOf(el ** 2), array2.indexOf(el ** 2));
//                 // for (let i = 0; i < array2.length; i++){
//                 //     if (array2[i] === array1[j] ** 2){
//                 //         // array2.splice(i, i);
//                 //     }
//                 // }
//                 // console.log(array2);
//                 console.log(array2.indexOf(array1[j] ** 2));
//                 delete array2[array2.indexOf(array1[j] ** 2)];
//                 // console.log(array2);
//                 continue;
//             }
//             else {
//                 return false;
//             }
//         }
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// a1 = [3, 6, 2, 2, 8, 1, 0, 9, 1, 0, 6, 0, 10, 6, 9, 2, 6, 8, 10, 8, 10];
// a2 = [64, 1, 1, 64, 64, 0, 36, 37, 0, 100, 0, 81, 9, 36, 4, 4, 36, 81, 100, 100, 4]
// // a2 = []
// console.log(same(a1, a2));





// function order(words){
//     word_arr = words.split(' ');
//     let sentence = '';
//     for (let i = 0; i < word_arr.length; i++){
//         for (let word of word_arr){
//             if (word.includes(i + 1)){
//                 sentence += word + ' ';
//                 break;
//             }
//         }
//     }
//     return sentence.trim();
// }

// console.log(order("is2 Thi1s T4est 3a"));






// function score( dice ) {
//     // dice.sort((a, b) => {
//     //     return a - b;
//     // })
//     var score = 0;
//     var rolls = [0, 0, 0, 0, 0, 0];
//     for (let el of dice){
//         rolls[el - 1] += 1;
//     }
//     for (let i = 0; i < rolls.length; i++){
//         if (rolls[i] >= 3){
//             rolls[i] -= 3;
//             if (i === 0){
//                 score += (i + 1) * 1000;
//             }
//             else{
//                 score += (i + 1) * 100;
//             }
//         }
//         if (i === 0 && rolls[i] > 0){
//             score += rolls[i] * 100;
//             rolls[i] = 0;
//         }
//         else if (i === 4 && rolls[i] > 0){
//             score += rolls[i] * 50;
//             rolls[i] = 0;
//         }
//     }
//     return score;
// }

// console.log(score([2, 4, 4, 5, 4]));




function zeros (n) {
    var multipliers = [];
    var zeros = 0;
    for (let i = n; i > 0; i--){
        multipliers.push(i);
    }
    if (multipliers.length < 5){
        return 0;
    }
    else if (multipliers.length < 6){
        return 1;
    }
    else{
        multipliers = multipliers.filter((el) => {
            if (el % 5 === 0) return el;
        })
    }
    multipliers.sort((a, b) => {
        return a - b;
    })
    for (let el of multipliers){
        if (el % 25 === 0){
            if ((el / 25) % 5 === 0){
                new_el = el / 25
                while(true){
                    if (new_el % 5 === 0){
                        zeros += 2;
                        new_el /= 5;
                    }
                    else{
                        break;
                    }
                }
            }
            // zeros += 2;
        }
        else{
            zeros += 1;
        }
    }
    return zeros
}

console.log(zeros(1000))