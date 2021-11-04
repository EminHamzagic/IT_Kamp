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





broj = Math.floor(Math.random() * (20 - 1) + 1)

// pokusaj = parseInt(prompt('Unesite vrednost za koju verujete da je random broj jednak(od 1 do 5):'))

// if (pokusaj === broj){
//     alert('Pogodili ste broj!')
// }
// else if (pokusaj !== broj){
//     alert('Niste pogodili broj, random broj je bio ' + broj)
// }

br_pokusaja = 5

while (true){
    pokusaj = parseInt(prompt('Unesite neki broj od 1 do 20, imate 5 pokusaja:'))
    if (pokusaj === broj){
        alert('Pogodili ste broj!')
        break
    }
    else if (pokusaj > broj){
        br_pokusaja -= 1
        if (br_pokusaja === 0){
            alert('Ostali ste bez pokusaja, niste pogodili da je broj ' + broj)
            break
        }
        alert('Broj je manji od ' + pokusaj + ', imate jos ' + br_pokusaja + ' pokusaja')
    }
    else if(pokusaj < broj){
        br_pokusaja -= 1
        if (br_pokusaja === 0){
            alert('Ostali ste bez pokusaja, niste pogodili da je broj ' + broj)
            break
        }
        alert('Broj je veci od ' + pokusaj + ', imate jos ' + br_pokusaja + ' pokusaja')
    }
}