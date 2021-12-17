// broj1 = parseInt(prompt('Unesite 1. broj:'))

// broj2 = parseInt(prompt('Unesite 2. broj:'))


// if (broj1 % 3 === 0 && broj1 % 5 === 0){
//     console.log('FizzBuzz')
// }
// else if (broj1 % 3 === 0){
//     console.log('Fizz')
// }
// else if (broj1 % 5 === 0){
//     console.log('Buzz')
// }
// else {
//     console.log(broj1)
// }

// if (broj2 % 3 === 0 && broj1 % 5 === 0){
//     console.log('FizzBuzz')
// }
// else if (broj2 % 3 === 0){
//     console.log('Fizz')
// }
// else if (broj2 % 5 === 0){
//     console.log('Buzz')
// }
// else {
//     console.log(broj2)
// }





// broj = Math.floor(Math.random() * (50 - 1) + 1)

// pokusaj = parseInt(prompt('Unesite vrednost za koju verujete da je random broj jednak(od 1 do 20):'))

// if (pokusaj === broj){
//     alert('Pogodili ste broj!')
// }
// else if (pokusaj !== broj){
//     alert('Niste pogodili broj, random broj je bio ' + broj)
// }

// br_pokusaja = 5

// while (true){
//     pokusaj = parseInt(prompt('Unesite neki broj od 1 do 20, imate 5 pokusaja:'))
//     if (pokusaj === broj){
//         alert('Pogodili ste broj!')
//         break
//     }
//     else if (pokusaj > broj){
//         br_pokusaja -= 1
//         if (br_pokusaja === 0){
//             alert('Ostali ste bez pokusaja, broj je ' + broj)
//             break
//         }
//         alert('Broj je manji od ' + pokusaj + ', imate jos ' + br_pokusaja + ' pokusaja')
//     }
//     else if(pokusaj < broj){
//         br_pokusaja -= 1
//         if (br_pokusaja === 0){
//             alert('Ostali ste bez pokusaja, broj je ' + broj)
//             break
//         }
//         alert('Broj je veci od ' + pokusaj + ', imate jos ' + br_pokusaja + ' pokusaja')
//     }
// }






// start = parseInt(prompt('Unesi pocetak:'))

// end = parseInt(prompt('Unesi karj:'))

// brojevi = []

// zbir = 0

// for (let i = start; i < end; i++){
//     brojevi.push(i)
//     zbir += i
// }

// alert('Zbir brojeva u zadataom opsegu je ' + zbir)

// console.log(brojevi)
// console.log(zbir)







// start = parseInt(prompt('Unesi pocetak:'))

// end = parseInt(prompt('Unesi karj:'))

// brojevi = []

// for (let i = start; i <= end; i++){
//     brojevi.push(i)
// }

// for (i = 0; i < brojevi.length; i++){
//     if (brojevi[i] % 2 === 0){
//         brojevi[i] = 'paran'
//     }
//     else{
//         brojevi[i] = 'neparan'
//     }
// }

// console.log(brojevi)




// start = parseInt(prompt('Unesi pocetak:'))

// end = parseInt(prompt('Unesi karj:'))

// brojevi = []

// zbir = 0

// brojac = 0

// for (let i = start; i < end + 1; i++){
//     brojevi.push(i)
//     zbir += i
//     brojac += 1
// }

// alert('Aritmeticka sredina brojeva u zadataom opsegu je ' + (zbir / brojac))

// console.log(brojevi)
// console.log(zbir)



str = 'Hello'

a = str.substr(0, str.length - 1)

console.log(a)