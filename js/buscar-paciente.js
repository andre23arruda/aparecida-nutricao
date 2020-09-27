var botao_bucar = document.querySelector('#buscar-paciente')

/* Busca pacientes que estão na API */
botao_bucar.addEventListener('click', function(){
    console.log('Buscando pacientes...')

    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
    xhr.addEventListener('load', function(){
        var resposta = xhr.responseText
        var pacientes = JSON.parse(resposta)
        adicionaPacientesBuscados(pacientes)
    })
    xhr.send()


})

/* Adiciona pacientes da api na tabela */
function adicionaPacientesBuscados(pacientes) {
    pacientes.forEach(paciente => {
        var paciente_tr = criaPacienteTr(paciente)
        if (paciente_tr) {
            document.querySelector('table').appendChild(paciente_tr)
        }
    });
}