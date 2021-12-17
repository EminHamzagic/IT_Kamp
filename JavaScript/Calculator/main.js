let rezultat = ''

operation = ''

br1 = br2 = 0

var input = document.getElementById("equals")

input.disabled = true

function addition(){
    br1 = Number(document.getElementById('box').value)
    operation = '+'
    document.getElementById('box').value = ''
}

function subtraction(){
    br1 = Number(document.getElementById('box').value)
    operation = '-'
    document.getElementById('box').value = ''
}

function multiplication(){
    br1 = Number(document.getElementById('box').value)
    operation = '*'
    document.getElementById('box').value = ''
}

function division(){
    br1 = Number(document.getElementById('box').value)
    operation = '/'
    document.getElementById('box').value = ''
}

function equals(){
    br2 = Number(document.getElementById('box').value)
    switch(operation){
        case '+': rezultat = br1 + br2
        break
        case '-': rezultat = br1 - br2
        break
        case '*': rezultat = br1 * br2
        break
        case '/': rezultat = br1 / br2
    }
    document.getElementById('box').value = rezultat
}

function one(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '1'
    }
}

function two(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '2'
    }
}

function three(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '3'
    }
}

function four(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '4'
    }
}

function five(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '5'
    }
}

function six(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '6'
    }
}

function seven(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '7'
    }
}

function eight(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '8'
    }
}

function nine(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '9'
    }
}

function zero(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += '0'
    }
}

function notch(){
    if (document.getElementById('box').value.length < 13){   
        document.getElementById('box').value += ','
    }
}

function backspace(){
    number = document.getElementById('box').value
    new_num = number.substr(0, number.length - 1)
    document.getElementById('box').value = new_num
}