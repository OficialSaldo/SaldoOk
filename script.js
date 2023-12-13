document.addEventListener('DOMContentLoaded', function() {
    var planes = document.querySelectorAll('.plan');

    planes.forEach(function(plan) {
        plan.addEventListener('click', function() {
            planes.forEach(function(p) {
                p.classList.remove('clicked');
            });

            this.classList.add('clicked');
        });
    });
});

function seleccionarOperadora(operadora) {
    console.log('Operadora seleccionada: ', operadora);
}

function validarTelefono() {

    document.getElementById("formulario-telefono").style.display = "none";
    document.getElementById("formulario-tarjeta").style.display = "block";
}

function seleccionarOperadora(operadora) {
    console.log("Operadora seleccionada:", operadora);
}