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
    var imc_td = document.createElement('td')
    imc_td.classList.add('info-imc')

    var peso = paciente_tr.querySelector('.info-peso').textContent
    var altura = paciente_tr.querySelector('.info-altura').textContent
    var imc = calculaImc(peso, altura)
    imc_td.innerText = imc
    avaliaImc(imc, paciente_tr)

    paciente_tr.appendChild(imc_td)

    document.querySelector('table').appendChild(paciente_tr)
})