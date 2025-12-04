require('dotenv').config();
const express = require('express');
const connectDB = require('./conexionbd');

const app = express();
app.use(express.json());

// Conectar a MongoDB Atlas
connectDB();

app.get('/', (req, res) => {
  res.send('API funcionando con MongoDB Atlas');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const usuarioRoutes = require('./src/infraestructure/routes/usuarioRoutes');
app.use('/usuarios', usuarioRoutes);

const taxiRoutes = require('./src/infraestructure/routes/taxiRoutes');
app.use('/taxis', taxiRoutes);


