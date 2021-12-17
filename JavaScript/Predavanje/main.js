// a = 5;
// b = 6;

// p = a * b
// o = 2 * a + 2 * b

// console.log('Povrsina pravougaonika je: ', p)
// console.log('Obim pravougaonika je: ', o)


// str = 'Hello'
// console.log(str.concat(' ', 'World'))

// function func1(){
//     str = document.getElementById('h1').innerHTML
//     document.getElementById('h1').innerHTML = str.replace('Hello', 'Hi')
// }



// let x = 5.32323232323

// console.log(Math.sin(90))


// array = ['Hello', 'World', 3, true]

// for (let i = 0; i < array.length; i++){
//     console.log(array[i])
// }




// var1 = ['Hello', 'There', 'General', 'Kenobi']

// var2 = var1.join()
// console.log(var2)
// console.log(var1)
// comeback = var1.pop()

// console.log(var1)
// console.log(comeback)


// var2 = var1.splice(1, 2, 'Darth', 'Vader', 'Hi')
// console.log(var2)
// console.log(var1)


// var2 = var1.slice(0, 3)
// console.log(var2)



// needed_god = prompt('Unesi broj godina koliko ti treba:')

// god = prompt('Unesi godine:')

// if (god > needed_god){
//     console.log('Imas vise nego dovoljno godina')
// }
// else if (god === needed_god){
//     console.log('Imas dovoljno godina')
// }
// else {
//     console.log('Nemas dovoljno godina')
// }




// broj = prompt('Unesi broj:')

// if (parseInt(broj) === 20){
//     alert('Broj je 20 :)')
// }
// else {
//     alert('Broj nije 20 :(')
// }




// lst_artikala = []

// while(true){
//     odluka = parseInt(prompt('Za unost artikla (1), Za brisanje zadnjeg artikla (2), za prikaz svih artikala (3):'))
//     if (odluka === 1){
//         artikal = prompt('Unesite naziv artikla:')
//         if (artikal.length > 7){
//             alert('Naziv artikla je veci od 7 slova, probajte ponovo!')
//             continue
//         }
//         lst_artikala.push(artikal)
//     }
//     else if(odluka === 2){
//         lst_artikala.pop()
//     }
//     else if(odluka === 3){
//         alert(lst_artikala)
//         break
//     }
//     else{
//         alert('Pogresan unos probajte ponovo!')
//     }
// }



// broj = parseInt(prompt('Uneite neki broj:'))

// if (broj === 0){
//     alert('Broj je 0')
// }
// else if (broj % 2 === 0){
//     alert('Broj je paran')
// }
// else {
//     alert('Broj je neparan')
// }





// br1 = parseInt(prompt('1. broj:'))
// br2 = parseInt(prompt('2. broj:'))

// if (br1 > br2){
//     console.log('1. broj je veci')
// }
// else if (br2 > br1){
//     console.log('2. broj je veci')
// }
// else {
//     console.log('Brojevi su jednaki')
// }




// dan = prompt()
// dan = dan.trim()

// dan = dan.replace(' ', '')

// switch(dan.toUpperCase()){
//     case 'PONEDELJAK': console.log('Danas je ponedeljak')
//     break
//     case 'UTORAK': console.log('Danas je utorak')
//     break
//     case 'SREDA': console.log('Danas je sreda')
//     break
//     case 'CETVRTAK': console.log('Danas je cetvrtak')
//     break
//     case 'PETAK': console.log('Danas je petak')
//     break
//     case 'SUBOTA': console.log('Danas je subota')
//     break
//     case 'NEDELJA': console.log('Danas je nedelja')
//     break
//     default: console.log('Pogresan unos!')
//     break
// }





// lst = ['Obi-Wan:', 'Hello', 'There', 'General Grievous:', 'General', 'Kenobi', '!']

// for (let i = 0; i < lst.length; i++){
//     console.log(lst[i])
// }




// start = parseInt(prompt('Unesite vrednost pocetak:'))

// end = parseInt(prompt('Unesite vrednost kraja'))

// for (i = start; i < end; i++){
//     if (i % 2 === 0){
//         console.log('Broj ' + i + ' je paran')
//     }
//     else {
//         console.log('Broj ' + i + ' je neparan')
//     }
// }





// array = []

// duzina = parseInt(prompt('Unesite dzinu niza:'))

// for (i = 0; i < duzina; i++){
//     array.push(prompt('Unesite ' + (i + 1) + '. element niza:'))
// }

// for (i = 0; i < array.length; i++){
//     switch(array[i].toUpperCase()){
//         case 'BANANA': console.log('Voce je zuto')
//         break
//         case 'JABUKA': console.log('Voce je crveno')
//         break
//         case 'GROZDJE': console.log('Voce je crno')
//         break
//         default: console.log('Boja je nepoznata')
//         break
//     }
// }





// array = []

// for (i = 0; i < 5; i++){
//     element = prompt('Unesi element')
//     if (element.length > 5){
//         array.push(element)
//     }
//     else {
//         alert('String je premali')
//     }
// }

// console.log(array)




// cars = ['Toyota', 'BMW', 'MErcedes', 'Audi', 'Lamborgini']

// for (x of cars){
//     console.log(x)
// }




// duzina = parseInt(prompt('Unesite duzinu niza:'))

// array = []

// for (i = 0; i < duzina; i++){
//     array.push(parseInt(prompt('Unesite ' + (i + 1) + '. clan niza:')))
// }

// max = array[0]

// for (i = 0; i < duzina; i++){
//     if (array[i] > max){
//         max = array[i]
//     }
// }

// alert('Najveci broj unetog niza je ' + max)
// console.log(max)





// size = parseInt(prompt('Unesite velicinu:'))

// line = ''

// for (i = 0; i < size; i++){
//     for (j = 0; j < i + 1; j++){
//         // line = ''
//         line += '* '
//     }
//     console.log(line)
//     line = ''
// }




// function func1(){
//     str1 = document.getElementById('txtbox').value
//     console.log(str1)
// }



// for (i = 5; i > 0; i--){
//     console.log(i)
// }




// str = prompt('Unesi nesto')

// new_str = ''

// for (i = str.length - 1; i >= 0; i--){
//     new_str += str[i]
// }

// console.log(new_str)




// br1 = parseInt(prompt('Unesite deljenik:'))

// br2 = parseInt(prompt('Unesite delilac:'))

// console.log(Boolean(br1 % br2 === 0))





broj = Math.floor(Math.random() * (20 - 1) + 1)

br_pokusaja = 5

while (true){
    pokusaj = parseInt(prompt('Unesite neki broj od 1 do 20, imate ' + br_pokusaja + ' pokusaja:'))
    if (pokusaj === broj){
        alert('Pogodili ste broj!')
        break
    }
    else if (pokusaj > broj){
        br_pokusaja -= 1
        if (br_pokusaja === 0){
            alert('Ostali ste bez pokusaja, broj je ' + broj)
            break
        }
        alert('Broj je manji od ' + pokusaj + ', imate jos ' + br_pokusaja + ' pokusaja')
    }
    else if(pokusaj < broj){
        br_pokusaja -= 1
        if (br_pokusaja === 0){
            alert('Ostali ste bez pokusaja, broj je ' + broj)
            break
        }
        alert('Broj je veci od ' + pokusaj + ', imate jos ' + br_pokusaja + ' pokusaja')
    }
}