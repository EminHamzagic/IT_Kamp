
brojevi = prompt()

lista_brojeva = brojevi.split(',')


for (let x of lista_brojeva){
    lista_brojeva[lista_brojeva.indexOf(x)] = parseInt(x)
    
}

for (let x of lista_brojeva){
    if (x % 15 === 0){
        lista_brojeva[lista_brojeva.indexOf(x)] = 'FizzBuzz'
    }
    else if (x % 3 === 0){
        lista_brojeva[lista_brojeva.indexOf(x)] = 'Fizz'
    }
    else if (x % 5 === 0){
        lista_brojeva[lista_brojeva.indexOf(x)] = 'Buzz'
    }
}

console.log(lista_brojeva)