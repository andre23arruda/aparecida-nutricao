var campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function(){
    var valorFiltro = this.value
    var pacientes = document.querySelectorAll('.paciente')
    pacientes.forEach(function(paciente){
        var nome = paciente.querySelector('.info-nome').textContent.toUpperCase()
        var expressao = new RegExp(valorFiltro, 'i')
        if(expressao.test(nome)) paciente.classList.remove('hide-tr')
        else paciente.classList.add('hide-tr')
        // if (nome.includes(valorFiltro.toUpperCase())) {
        //     paciente.classList.remove('hide-tr')
        // } else {
        //     paciente.classList.add('hide-tr')
        // }
    })
})