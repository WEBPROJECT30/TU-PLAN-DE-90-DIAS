document.getElementById("dietaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const peso = parseInt(document.getElementById("peso").value);
    const altura = parseInt(document.getElementById("altura").value);
    const edad = parseInt(document.getElementById("edad").value);
    const objetivo = document.getElementById("objetivo").value;
    const deporte = document.getElementById("deporte").value;

    const datos = { peso, altura, edad, objetivo, deporte };

    // Hacer la solicitud al backend
    fetch("http://localhost:3000/generar-plan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar el plan en la página
        document.getElementById("formularioPersonalizado").innerHTML = `
            <h3>Tu Plan Personalizado</h3>
            <pre>${data.plan}</pre>
        `;
    })
    .catch(error => {
        console.error("Error al generar el plan:", error);
    });
});
