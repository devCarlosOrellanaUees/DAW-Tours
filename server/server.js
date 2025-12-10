// ===============================
// IMPORTS
// ===============================
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para recibir JSON
app.use(express.urlencoded({ extended: true }));

// ===============================
// DATA (puede venir de archivo externo)
// ===============================
const images = [
    { img: "atardecer.jpg", descripcion: "Paisaje Galápagos" },
    { img: "cabeza-tortuga.jpg", descripcion: "Tortugas Gigantes" },
    { img: "nosotros.jpg", descripcion: "Aves Marinas" },
    { img: "crater.jpg", descripcion: "Playas Paradisíacas" },
    { img: "foca.jpg", descripcion: "Kicker Rock" },
    { img: "foca.jpg", descripcion: "Kicker Rock" },
    { img: "foca.jpg", descripcion: "Kicker Rock" },
    { img: "tortuga-mar.jpg", descripcion: "Fauna y Flora" }
];

// ===============================
// GET - LISTA DE IMÁGENES
// ===============================
app.get('/api/galeria', (req, res) => {
    console.log("GET IMAGENES -> ")
    res.json({
        data: images
    });
});

// ===============================
// POST - FORMULARIO DE CONTACTO
// ===============================
app.post('/api/contacto', (req, res) => {
    const { name, email, message } = req.body;

    console.log("📩 NUEVO MENSAJE DESDE EL FRONTEND");
    console.log("Nombre:", name);
    console.log("Correo:", email);
    console.log("Mensaje:", message);

    res.json({
        ok: true,
        message: "Mensaje recibido correctamente ✔"
    });
});

// ===============================
// LEVANTAR SERVIDOR
// ===============================
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
});
