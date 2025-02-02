document.getElementById("dietForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado correctamente. ¡Te contactaremos pronto!");
});

// Simulación de pago con Stripe
document.getElementById("payButton").addEventListener("click", function() {
    alert("Redirigiendo a la pasarela de pago...");
    // Aquí iría la integración con Stripe o PayPal
});
