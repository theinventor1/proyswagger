const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const app = express();
const port = 3000;
// Ruta al archivo YAML de Swagger
/**me llamo mazinger z */
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
// Middleware para servir la documentación generada por Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Rutas de ejemplo
app.get('/saludo', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/', (req, res) => {
  res.send('¡soy API!');
});

app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  // Simulación de búsqueda de usuario
  if (userId === '1') {
    res.json({ id: 1, nombre: 'Ejemplo' });
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});