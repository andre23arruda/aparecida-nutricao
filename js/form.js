/* Clica no botão */
var botao_adicionar = document.querySelector("#adicionar-paciente")
botao_adicionar.addEventListener('click', function (e){
    e.preventDefault()

    var form = document.querySelector('#form-novo-paciente')
    var paciente = criaPaciente(form)
    var paciente_tr = criaPacienteTr(paciente)
    document.querySelector('table').appendChild(paciente_tr)
    form.reset()
})

/* Cria paciente */
function criaPaciente(form){
    var paciente = {}
    var inputs = form.querySelectorAll('input')
    for (input of inputs){
        var info = input.name
        var info_value = input.value
        paciente[info] = info_value
    }
    paciente['imc'] = ''
    return paciente
}

/* Cria linha de paciente na tabela */
function criaPacienteTr(paciente){
    var paciente_tr = document.createElement('tr') //cria tr
    paciente_tr.classList.add('paciente')

    for (prop in paciente) {
        var info_td = document.createElement('td') // cria célula
        info_td.textContent = paciente[prop]
        info_td.classList.add(`info-${prop}`)
        paciente_tr.appendChild(info_td)
    }

    var imc = calculaImc(paciente.peso, paciente.altura)
    paciente_tr.querySelector('.info-imc').innerText = imc
    paciente_tr = avaliaImc(imc, paciente_tr)

    return paciente_tr

}