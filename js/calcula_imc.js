var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente')
for(var paciente of pacientes) {
    var peso = paciente.querySelector('.info-peso').textContent
    var altura = paciente.querySelector('.info-altura').textContent
    var imc = calculaImc(peso, altura)
    paciente.querySelector('.info-imc').innerText = imc
    avaliaImc(imc, paciente)
}

/* Calcula IMC */
function calculaImc(peso, altura) {
    var imc = ''
    if (peso <=0 || peso >= 500) imc += ' Peso inválido'
    if (altura <=0 || altura >= 3) imc += ' Altura inválida'
    if (!(imc)) imc = (peso/(altura ** 2)).toFixed(2)
    return imc
}

/* Avalia IMC e altera cor da linha*/
function avaliaImc(imc, paciente_tr){
    if (isNaN(imc)){
        paciente_tr.classList.add('paciente-invalido')
        return false
    }
    return true
}
