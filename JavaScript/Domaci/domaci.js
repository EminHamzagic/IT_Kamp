broj1 = parseInt(prompt('Unesite 1. broj:'))

broj2 = parseInt(prompt('Unesite 2. broj:'))


if (broj1 % 3 === 0 && broj1 % 5 === 0){
    console.log('FizzBuzz')
}
else if (broj1 % 3 === 0){
    console.log('Fizz')
}
else if (broj1 % 5 === 0){
    console.log('Buzz')
}
else {
    console.log(broj1)
}

if (broj2 % 3 === 0 && broj1 % 5 === 0){
    console.log('FizzBuzz')
}
else if (broj2 % 3 === 0){
    console.log('Fizz')
}
else if (broj2 % 5 === 0){
    console.log('Buzz')
}
else {
    console.log(broj2)
}