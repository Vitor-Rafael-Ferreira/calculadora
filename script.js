let numeroA = prompt("Digite o primeiro número aqui para a conta matemática!")
numeroA = parseInt(numeroA)

let numeroB = prompt("Digite o segundo número aqui para a conta matemática!")
numeroB = parseInt(numeroB)

let calculo = prompt("Digite o simbolo da conta aqui! (+ mais, - menos, / divisão, * multiplicação)")

if(calculo === "+"){
    let mais = parseInt(numeroA) + parseInt(numeroB)
    alert(`Seu resultado é ${mais}`)  
}

if(calculo === "-"){
    let menos = parseInt(numeroA) - parseInt(numeroB)
    alert(`Seu resultado é ${menos}`)  

}if(calculo === "/"){
    let divisão  = parseInt(numeroA) / parseInt(numeroB)
    alert(`Seu resultado é ${divisão}`)  

}if(calculo === "*"){
    let multiplicação  = parseInt(numeroA) * parseInt(numeroB)
    alert(`Seu resultado é ${multiplicação}`)  
}
