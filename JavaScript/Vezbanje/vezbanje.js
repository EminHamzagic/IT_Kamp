
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




// function zeros (n) {
//     var multipliers = [];
//     var zeros = 0;
//     for (let i = n; i > 0; i--){
//         multipliers.push(i);
//     }
//     if (multipliers.length < 5){
//         return 0;
//     }
//     else if (multipliers.length < 6){
//         return 1;
//     }
//     else{
//         multipliers = multipliers.filter((el) => {
//             if (el % 5 === 0) return el;
//         })
//     }
//     multipliers.sort((a, b) => {
//         return a - b;
//     })
//     for (let el of multipliers){
//         if (el % 25 === 0){
//             if ((el / 25) % 5 === 0){
//                 new_el = el / 25
//                 while(true){
//                     if (new_el % 5 === 0){
//                         zeros += 2;
//                         new_el /= 5;
//                     }
//                     else{
//                         break;
//                     }
//                 }
//             }
//             // zeros += 2;
//         }
//         else{
//             zeros += 1;
//         }
//     }
//     return zeros
// }

// console.log(zeros(1000))





// txt = 
// `
// bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa!
// dp,2siJjNzKn3wyG?6IfxCW9U1o7Mvuqadp,2siJjNzKn3wyG?6IfxCW9U1o7Mvuqa!
// h,QieNZnSy 6cx59Ao0vPah,QieNZnSy 6cx59Ao0vPah,QieNZnSy 6cx59Ao0vPa!
// p2ijznwG6fC917vqd,sJNK3y?IxWUoMuap2ijznwG6fC917vqd,sJNK3y?IxWUoMua!
// FsezBy.f5UDvHpQJmnT?cC4okqh2rNgw IV9OMPd8itKSGYxE10ub,LjZ3X6lWA7Ra!
// ,iNny6x9ova,iNny6x9ova,iNny6x9ova,iNny6x9ova,iNny6x9ova,iNny6x9ova!
// 8JZw.x47PpLNBGcWOvb2eKT6VU0qFim3 fEoRdQjgyYCAMH,rzS?l9DuhstnXI51ka!
// 2jnGf97q,JKyIWoupizw6C1vdsN3?xUMa2jnGf97q,JKyIWoupizw6C1vdsN3?xUMa!
// QNS65oP,en xAvhiZyc90aQNS65oP,en xAvhiZyc90aQNS65oP,en xAvhiZyc90a!
// szyfUvpJn?Coq2NwI9MdiKGx1u,j36W7aszyfUvpJn?Coq2NwI9MdiKGx1u,j36W7a!
// LK CDaLK CDaLK CDaLK CDaLK CDaLK CDaLK CDaLK CDaLK CDaLK CDaLK CDa!
// in69v,Nyxoain69v,Nyxoain69v,Nyxoain69v,Nyxoain69v,Nyxoain69v,Nyxoa!
// r3c1HiBIAqLnYUPsg64uQK.9R2Z?Ev8z Wk,mG5MFNXC0ptyV7hjTxDdewlobJSfOa!
// Jwx7pNGWv2K6Uqi3fodjyCM,z?9usnI1aJwx7pNGWv2K6Uqi3fodjyCM,z?9usnI1a!
// ey5vQncohN 9PiSx0,Z6Aaey5vQncohN 9PiSx0,Z6Aaey5vQncohN 9PiSx0,Z6Aa!
// jG9qJyWuiwCvs3xM2nf7,KIopz61dN?UajG9qJyWuiwCvs3xM2nf7,KIopz61dN?Ua!
// t?Adm6OpZID,gf02BxksSCRiTWPJX9Hj UbN.1hzYoFKc78nlMQ3VvLw5uryEqeG4a!
// N6o,nxviy9aN6o,nxviy9aN6o,nxviy9aN6o,nxviy9aN6o,nxviy9aN6o,nxviy9a!
// mI0sT9bzcMLy4dZfkiXUhKlvrGApgxRJ 1FnVue?O,BCPj.o835qt6D2SWHNY7QwEa!
// zfvJ?o2w9dKxuj67syUpnCqNIMiG1,3WazfvJ?o2w9dKxuj67syUpnCqNIMiG1,3Wa!
// ZxPNcve60i oQyA,S9hn5aZxPNcve60i oQyA,S9hn5aZxPNcve60i oQyA,S9hn5a!
// KCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCaKCa!
// gWh34,T1QGDi.MeIRNlqZCbnEpSU8yOs 7r6kjcumxHK5dB9FwA2XoL?0JYvtfPzVa!
// n9,yoi6vNxan9,yoi6vNxan9,yoi6vNxan9,yoi6vNxan9,yoi6vNxan9,yoi6vNxa!
// BUQ?kNVdS1L6Rz5pTorIPKE,X7efHn42 Mtxb3As.vmChwOiYuZWFyDJcqg98G0jla!
// 31iIqnUs6uK92?vzW,GMNCpy7jxdwoJfa31iIqnUs6uK92?vzW,GMNCpy7jxdwoJfa!
// Soexhy0N5, vZ9Q6PnAicaSoexhy0N5, vZ9Q6PnAicaSoexhy0N5, vZ9Q6PnAica!
// w7NW26q3ojC,?un1JxpGvKUifdyMz9sIaw7NW26q3ojC,?un1JxpGvKUifdyMz9sIa!
// TMZUrxF?P3DNEscdXvg1eC86Hw0z4ilp uBotWQIbykKAJV,.qS7m9LfhGRnOj52Ya!
// yvnoN9ix,6ayvnoN9ix,6ayvnoN9ix,6ayvnoN9ix,6ayvnoN9ix,6ayvnoN9ix,6a!
// XuSMgomUeWLx8Ih?HyR30KON4J5sl,Yd qTvB7Z1t9rCQfF6bGPwknDzAjEiV2cp.a!
// Gqyuwv3Mn7Koz1NUj9JWiCsx2f,Ip6d?aGqyuwv3Mn7Koz1NUj9JWiCsx2f,Ip6d?a!
//  a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a!
// ?d6pI,f2xsCiWJ9jUN1zoK7nM3vwuyqGa?d6pI,f2xsCiWJ9jUN1zoK7nM3vwuyqGa!
// .pc2ViEjAzDnkwPGb6FfQCr9t1Z7BvTq dY,ls5J4NOK03RyH?hI8xLWeUmogMSuXa!
// 6,xi9Nonvya6,xi9Nonvya6,xi9Nonvya6,xi9Nonvya6,xi9Nonvya6,xi9Nonvya!
// Y25jOnRGhfL9m7Sq.,VJAKkybIQWtoBu pli4z0wH68Ce1gvXdcsEND3P?FxrUZMTa!
// Is9zMydfiUKvGpxJ1nu?,Cjo3q62WN7waIs9zMydfiUKvGpxJ1nu?,Cjo3q62WN7wa!
// ciAnP6Q9Zv ,5N0yhxeoSaciAnP6Q9Zv ,5N0yhxeoSaciAnP6Q9Zv ,5N0yhxeoSa!
// fJowdxj7ypCNMG,Wzv?29Ku6sUnqIi13afJowdxj7ypCNMG,Wzv?29Ku6sUnqIi13a!
// lj0G89gqcJDyFWZuYiOwhCmv.sA3bxtM 24nHfe7X,EKPIroTp5zR6L1SdVNk?QUBa!
// xNv6ioy,9naxNv6ioy,9naxNv6ioy,9naxNv6ioy,9naxNv6ioy,9naxNv6ioy,9na!
// VzPftvYJ0?LoX2AwF9Bd5KHxmucjk6r7 sOy8USpEnbCZqlNRIeM.iDGQ1T,43hWga!
// CKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKaCKa!
// 5nh9S,AyQo i06evcNPxZa5nh9S,AyQo i06evcNPxZa5nh9S,AyQo i06evcNPxZa!
// W3,1GiMINqCnpUys76juxKd9w2o?JvfzaW3,1GiMINqCnpUys76juxKd9w2o?Jvfza!
// EwQ7YNHWS2D6tq538o.jPCB,O?euVnF1 JRxgpAGrvlKhUXikfZd4yLMczb9Ts0Ima!
// 9yivxn,o6Na9yivxn,o6Na9yivxn,o6Na9yivxn,o6Na9yivxn,o6Na9yivxn,o6Na!
// 4GeqEyru5wLvV3QMln87cKFoYzh1.NbU jH9XJPWTiRCSskxB20fg,DIZpO6mdA?ta!
// U?Nd16zpoIK,7fn2Mx3svCwiuWyJq9GjaU?Nd16zpoIK,7fn2Mx3svCwiuWyJq9Gja!
// A6Z,0xSiP9 NhocnQv5yeaA6Z,0xSiP9 NhocnQv5yeaA6Z,0xSiP9 NhocnQv5yea!
// 1Insu9?z,MCyjdof3iqU6K2vWGNp7xwJa1Insu9?z,MCyjdof3iqU6K2vWGNp7xwJa!
// OfSJbolwedDxTjh7Vytp0CXNFM5Gm,kW z8vE?Z2R9.KQu46gsPUYnLqAIBiH1c3ra!
// oxyN,v96niaoxyN,v96niaoxyN,v96niaoxyN,v96niaoxyN,v96niaoxyN,v96nia!
// DC KLaDC KLaDC KLaDC KLaDC KLaDC KLaDC KLaDC KLaDC KLaDC KLaDC KLa!
// 7W63j,u1xGKidM9IwN2qoC?nJpvUfyzsa7W63j,u1xGKidM9IwN2qoC?nJpvUfyzsa!
// 09cyZihvAx ne,Po56SNQa09cyZihvAx ne,Po56SNQa09cyZihvAx ne,Po56SNQa!
// MUx?3Nsdv1C6wzipuoWIyKJ,q79fGnj2aMUx?3Nsdv1C6wzipuoWIyKJ,q79fGnj2a!
// k15IXntshuD9l?Szr,HMACYygjQdRoEf 3miFq0UV6TKe2bvOWcGBNLpP74x.wZJ8a!
// vo9x6ynNi,avo9x6ynNi,avo9x6ynNi,avo9x6ynNi,avo9x6ynNi,avo9x6ynNi,a!
// R7AWl6X3ZjL,bu01ExYGSKti8dPMO9VI wgNr2hqko4Cc?TnmJQpHvDU5f.yBzesFa!
// uMoUWxI?y3KNJs,dqv719Cf6Gwnzji2pauMoUWxI?y3KNJs,dqv719Cf6Gwnzji2pa!
// Pv0oA95xc6 ySnZNeiQ,haPv0oA95xc6 ySnZNeiQ,haPv0oA95xc6 ySnZNeiQ,ha!
// quvM7o1U9WCxfI6?Gyw3nKzNjJis2,pdaquvM7o1U9WCxfI6?Gyw3nKzNjJis2,pda!
// HqPuRvkM07DoO1AU49EW5CVxlfcIY6.? GXyTwS3BngKZzmNtjeJriLsQ28,Fphdba!
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!`;


// `
// ztFnt2!
// Zm2wKJ!
// KZLGSz!
// ggJ6G3!
// nBtfYG!
// BSzCxI!
// 3Tg9EC!
// SX311U!
// w T707!
// T.Gvuu!
// yY.qbd!
// XcId,2!
// Gll,LJ!
//  VCsjz!
// ?5EJZ3!
// .EUN3G!
// 64OKXI!
// YA736C!
// IOkylU!
// cDu?W7!
// f0HIAu!
// lkdx7d!
// xRFWR2!
// VP2UaJ!
// CHLoFz!
// 5bJMs3!
// WhtueG!
// EFzazI!
// 98gpBC!
// 4Q32yU!
// ULTi.7!
// ArGjfu!
// 1e.z5d!
// OtInU2!
// omlwDJ!
// DZCGvz!
// 7gE6H3!
// 0BUfpG!
// MSOCQI!
// kT79JC!
// vXk1mU!
// R u7n7!
// u.HvTu!
// PYdq?d!
// qcFdc2!
// Hl2,CJ!
// aVLs4z!
// b5JJo3!
// dEtNkG!
// h4zKqI!
// pAg3hC!
// FO3y2U!
// ,DT?r7!
// 80GINu!
// 2k.xgd!
// QRIWw2!
// sPlU J!
// LHCoIz!
// ibEMV3!
// rhUu9G!
// JFOaOI!
// e87pMC!
// jQk2PU!
// tLuid7!
// NrHj8u!
// medzid!
// `

// lista = txt.split('!');
// for (let el of lista){
//     console.log(el);
//     console.log('object');
// }

// txt = 'ax';

// console.log(txt.charCodeAt(0));
// console.log(txt.charCodeAt(1));

// txt = String.fromCharCode('97')

// function encode(str){
//     specials = 'ABCabc'
//     var chars = str.split('');
//     encoded = ''
//     new_chars = [];
//     for (let char of chars){
//         if (specials.includes(char)){
//             new_chars.push(String.fromCharCode(char.charCodeAt(0) + 23));
//         }
//         else {
//             new_chars.push(String.fromCharCode(char.charCodeAt(0) - 3));
//         }
//     }
//     for (let el of new_chars) encoded += el;
//     console.log(encoded);
// }

// function decode(str){
//     specials = 'ABCabc'
//     var chars = str.split('');
//     encoded = ''
//     new_chars = [];
//     for (let char of chars){
//         if (specials.includes(char)){
//             new_chars.push(String.fromCharCode(char.charCodeAt(0) + 3));
//         }
//         else {
//             new_chars.push(String.fromCharCode(char.charCodeAt(0) + 3));
//         }
//     }
//     for (let el of new_chars) encoded += el;
//     console.log(encoded);
// }

// encode('weeb');
// decode('tbby');




// function longestConsec(strarr, k) {
//     new_arr = [];
//     for (let i = 0; i < strarr.length - (k - 1); i++){
//         new_el = '';
//         for (let j = i; j < i + k; j++){
//             new_el += strarr[j];
//         }
//         new_arr.push(new_el);
//     }
//     max_str = '';
//     for (let str of new_arr){
//         if (str.length > max_str.length){
//             max_str = str;
//         }
//     }
//     return max_str
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));




// function Divisors(num){
//     var divisors = [];
//     for (let i = 1; i <= num; i++){
//         if (num % i === 0){
//             divisors.push(i);
//         }
//     }
//     return divisors;
// }

// function listSquared(m, n) {
//     var squared = [];
//     for (let i = m; i < n; i++){
//         divisors = Divisors(i);
//         sum = 0;
//         for (let num of divisors) sum += num ** 2;
//         if (Math.sqrt(sum) % 1 === 0){
//             squared.push([i, sum]);
//         }
//     }
//     return squared;
// }


// console.log(Divisors(15));
// console.log(listSquared(1, 250));
// console.log(Math.sqrt(29));