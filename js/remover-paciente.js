var pacientes = document.querySelectorAll('.paciente')

var tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function(event){
    var alvoEvento = event.target
    var paiDoAlvo = alvoEvento.parentNode
    paiDoAlvo.classList.add('fade-out')
    setTimeout(function(){
        paiDoAlvo.remove()
    }, 1000)
})

// pacientes.forEach(function(paciente){
//     paciente.addEventListener('dblclick', function(){
//         this.remove()
//     })
// })