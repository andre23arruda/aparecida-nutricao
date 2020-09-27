var campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function(){
    var valorFiltro = this.value
    var pacientes = document.querySelectorAll('.paciente')
    pacientes.forEach(function(paciente){
        var nome = paciente.querySelector('.info-nome').textContent.toUpperCase()
        console.log(nome)
        if (nome.includes(valorFiltro.toUpperCase())) {
            paciente.classList.remove('hide-tr')
        } else {
            paciente.classList.add('hide-tr')
        }
    })
})