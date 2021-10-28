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



needed_god = prompt('Unesi broj godina koliko ti treba:')

god = prompt('Unesi godine:')

if (god > needed_god){
    console.log('Imas vise nego dovoljno godina')
}
else if (god === needed_god){
    console.log('Imas dovoljno godina')
}
else {
    console.log('Nemas dovoljno godina')
}