var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"

/* Calcula IMC */
var pacientes = document.querySelectorAll('.paciente')
for(var paciente of pacientes) {

    var imc = ''

    var peso = paciente.querySelector('.info-peso').textContent
    if (peso <=0 || peso >= 500)
        imc += ' Peso inválido'

    var altura = paciente.querySelector('.info-altura').textContent
    if (altura <=0 || altura >= 3)
        imc += ' Altura inválida'

    if (!(imc)) {
        imc = peso/(altura ** 2)
        imc = imc.toFixed(2)
    }
    paciente.querySelector('.info-imc').innerText = imc

    // Muda cor se for inválido
    if (isNaN(imc))
        // paciente.style.color = 'red' // alterar estilo no js não é adequado
        paciente.classList.add('paciente-invalido') // adiciona classe no elemento e assim altera estilo

}

/* Escutando eventos */
var botao_adicionar = document.querySelector("#adicionar-paciente")
botao_adicionar.addEventListener('click', function (e){
    e.preventDefault()
    console.log('Ola, fui clicado. Função anonima')

    var form = document.querySelector('#form-novo-paciente')
    var grupos = form.querySelectorAll('.grupo')
    var paciente_tr = document.createElement('tr')
    paciente_tr.classList.add('paciente')
    for (grupo of grupos){
        var info_class = grupo.querySelector('input').name
        var info_value = grupo.querySelector('input').value
        var info_td = document.createElement('td')
        info_td.textContent = info_value
        info_td.classList.add(`info-${info_class}`)
        paciente_tr.appendChild(info_td)
    }
    // console.log(paciente_tr)
    imc_td = document.createElement('td')
    imc_td.textContent = 0
    imc_td.classList.add('info-imc')
    paciente_tr.appendChild(imc_td)

    document.querySelector('table').appendChild(paciente_tr)
})