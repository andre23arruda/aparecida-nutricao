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
titulo.addEventListener('click', mostraMensagem)

function mostraMensagem(){
    console.log('Ola, fui clicado')
}

/* Escutando eventos: Função anonima */
var titulo_form = document.querySelector("#titulo-form")
titulo_form.addEventListener('click', function (){
    console.log('Ola, fui clicado. Função anonima')
})
