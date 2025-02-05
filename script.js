document.getElementById("dietaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let objetivo = document.getElementById("objetivo").value;
    let peso = parseInt(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value);
    let edad = parseInt(document.getElementById("edad").value);
    let deporte = document.getElementById("deporte").value;
    
    // Validaciones
    if (peso <= 0 || altura <= 0 || edad <= 0) {
        alert("Por favor, ingresa datos válidos.");
        return;
    }
    
    let plan = "";
    
    if (objetivo === "bajar") {
        plan = `Debes consumir menos calorías de las que gastas. Incluye más proteínas y vegetales en tu dieta. Haz ejercicios de cardio como correr o nadar.`;
    } else if (objetivo === "mantener") {
        plan = `Tu dieta debe ser equilibrada. Consume carbohidratos complejos, proteínas magras y grasas saludables en cada comida.`;
    } else if (objetivo === "ganar") {
        plan = `Necesitas un superávit calórico. Come más proteínas, carbohidratos y grasas saludables. Entrena fuerza y aumenta la carga progresivamente.`;
    }
    
    document.getElementById("formularioPersonalizado").innerHTML = `
        <h3>Tu Plan Personalizado</h3>
        <p><strong>Objetivo:</strong> ${objetivo}</p>
        <p><strong>Peso:</strong> ${peso} kg</p>
        <p><strong>Altura:</strong> ${altura} cm</p>
        <p><strong>Edad:</strong> ${edad} años</p>
        <p><strong>Deporte:</strong> ${deporte}</p>
        <p><strong>Recomendaciones:</strong> ${plan}</p>
    `;
});
