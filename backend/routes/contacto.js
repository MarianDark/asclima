const express = require('express');
const router = express.Router();
const Contacto = require('../models/Contacto');

router.post('/', async (req, res) => {
  try {
    const contacto = new Contacto(req.body);
    await contacto.save();
    res.status(201).json({ mensaje: "Formulario recibido" });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar formulario" });
  }
});

module.exports = router;
