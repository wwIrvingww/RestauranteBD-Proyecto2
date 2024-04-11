const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'postgres',
  host: 'restaurantesdb.cvpznx9yle9l.us-east-2.rds.amazonaws.com',
  database: 'restaurantesdb',
  password: '123456789',
  port: 5432, // Puerto predeterminado de PostgreSQL
});

app.get('/datos', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM ordenes');
    res.json(result.rows);
    client.release();
  } catch (err) {
    console.error('Error al obtener datos', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

app.get('/' , async (req, res) => {
  res.send('Hola')
})

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
