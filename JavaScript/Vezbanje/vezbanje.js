
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



function humanReadable (seconds) {
    // if (seconds < 60){
    //     return '00:00:' + seconds;
    // }
    // else {
    //     let mins = Math.floor(seconds / 60);
    //     let hours = 0;
    //     // return mins
    //     if (mins < 59){
    //         if 
    //         return hours + ':' + mins + ':' + (seconds - mins * 60);
    //     }
    //     // return time
    // }
    let mins = Math.floor(seconds / 60);
    let hours = Math.floor(mins / 60);
    seconds = seconds - mins * 60;
    mins = mins - hours * 60;
    if (seconds < 10) seconds = '0' + seconds;
    if (mins < 10) mins = '0' + mins;
    if (hours < 10) hours = '0' + hours;
    // console.log(seconds, mins, hours);
    return hours + ':' + mins + ':' + seconds;
}

console.log(humanReadable(3600));