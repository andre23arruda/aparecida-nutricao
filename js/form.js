/* Clica no botão */
var botao_adicionar = document.querySelector("#adicionar-paciente")
botao_adicionar.addEventListener('click', function (e){
    e.preventDefault()

    var form = document.querySelector('#form-novo-paciente')
    var paciente = criaPaciente(form)
    var paciente_tr = criaPacienteTr(paciente)
    if (paciente_tr) {
        document.querySelector('table').appendChild(paciente_tr)
        form.reset()
    }
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

    // Validação de peso e altura
    var erros = validaPaciente(paciente)
    if (erros[0]){
        exibeErros(erros)
        return
    } else {
        paciente_tr.querySelector('.info-imc').innerText = paciente.imc
        document.querySelector('.mensagem-erro').innerHTML = ''
        return paciente_tr
    }
}


/* Valida paciente */
function validaPaciente(paciente) {
    var erros = []
    if (paciente.nome.length == 0) erros.push(`Erro na informação de: Nome`)

    // analisa peso e altura
    var array_expressoes = ['Peso', 'Altura']
    var imc = calculaImc(paciente.peso, paciente.altura)
    paciente.imc = imc
    array_expressoes.forEach(function(expressao) {
        if (paciente.imc.includes(expressao)) erros.push(`Erro na informação de: ${ expressao }`)
    })
    // analisa nome e gordura
    if (paciente.gordura.length == 0) erros.push(`Erro na informação de: Gordura`)
    if (isNaN(paciente.imc)) erros.push(`Erro na informação de: IMC`)
    return erros
}


/* Exibe erros */
function exibeErros(erros) {
    var ul_erros = document.querySelector('.mensagem-erro')
    ul_erros.innerHTML = ''
    erros.forEach(function(erro) {
        var li = document.createElement('li')
        li.textContent = erro
        ul_erros.appendChild(li)
    })
}
