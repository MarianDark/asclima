require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const contactoRoutes = require('./routes/contacto');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/contacto', contactoRoutes);

app.listen(5000, () => console.log("Servidor corriendo en puerto 5000"));
