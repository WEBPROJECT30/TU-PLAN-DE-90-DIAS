document.getElementById("dietaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let objetivo = document.getElementById("objetivo").value;
    let peso = parseInt(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value);
    let edad = parseInt(document.getElementById("edad").value);
    let deporte = document.getElementById("deporte").value;
    let preferencias = document.getElementById("preferencias").value;
    let intolerancias = document.getElementById("intolerancias").value;
    let frecuencia = parseInt(document.getElementById("frecuencia").value);
    
    let plan = "";

    // Generación del plan según el objetivo
    if (objetivo === "bajar") {
        plan = `Debes consumir menos calorías de las que gastas. Incluye más proteínas y vegetales en tu dieta. Haz ejercicios de cardio como correr o nadar.`;
    } else if (objetivo === "mantener") {
        plan = `Tu dieta debe ser equilibrada. Consume carbohidratos complejos, proteínas magras y grasas saludables en cada comida.`;
    } else if (objetivo === "ganar") {
        plan = `Necesitas un superávit calórico. Come más proteínas, carbohidratos y grasas saludables. Entrena fuerza y aumenta la carga progresivamente.`;
    }

    // Personalización con preferencias
    if (preferencias === "vegetariano") {
        plan += ` Como preferencia vegetariana, asegúrate de incluir proteínas vegetales como tofu, tempeh y legumbres.`;
    } else if (preferencias === "vegano") {
        plan += ` Como vegano, elige fuentes de proteína como quinoa, frijoles, lentejas y frutos secos.`;
    }

    // Intolerancias
    if (intolerancias) {
        plan += ` Ten en cuenta las intolerancias alimentarias: ${intolerancias}. Evita alimentos que contengan estos ingredientes.`;
    }
    
    // Mostrar los resultados en la página
    document.getElementById("formularioPersonalizado").innerHTML = `
        <h3>Tu Plan Personalizado</h3>
        <p><strong>Objetivo:</strong> ${objetivo}</p>
        <p><strong>Peso:</strong> ${peso} kg</p>
        <p><strong>Altura:</strong> ${altura} cm</p>
        <p><strong>Edad:</strong> ${edad} años</p>
        <p><strong>Deporte:</strong> ${deporte}</p>
        <p><strong>Preferencias Alimentarias:</strong> ${preferencias}</p>
        <p><strong>Intolerancias Alimentarias:</strong> ${intolerancias}</p>
        <p><strong>Frecuencia de Ejercicio:</strong> ${frecuencia} veces por semana</p>
        <p><strong>Recomendaciones:</strong> ${plan}</p>
    `;
});
