const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Ruta para manejar el formulario
app.post("/generar-plan", async (req, res) => {
    const { peso, altura, edad, objetivo, deporte } = req.body;

    const prompt = `
    Eres un experto en nutrición y entrenamiento personal. Crea un plan completamente personalizado para una persona basado en los siguientes datos:
    - Peso: ${peso} kg
    - Altura: ${altura} cm
    - Edad: ${edad} años
    - Objetivo: ${objetivo} (puede ser 'bajar peso', 'mantener peso', o 'ganar masa muscular')
    - Deporte: ${deporte}

    Genera un plan de nutrición detallado y un plan de entrenamiento con calorías, macronutrientes y ejercicios recomendados.
    `;

    try {
        // Llamada a la API de OpenAI para generar el plan
        const response = await axios.post("https://api.openai.com/v1/completions", {
            model: "text-davinci-003", // Usar el modelo adecuado
            prompt: prompt,
            max_tokens: 1500,
            temperature: 0.7,
        }, {
            headers: {
                "Authorization": `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`, // Sustituye con tu clave
                "Content-Type": "application/json"
            }
        });

        const plan = response.data.choices[0].text.trim();
        res.json({ plan });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al generar el plan." });
    }
});

app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});
