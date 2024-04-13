import { Client } from 'pg';

// Configuración de la conexión a la base de datos
const client = new Client({
  user: 'tu_usuario',
  host: 'tu_host',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432, // Puerto predeterminado de PostgreSQL
});

// Conectar a la base de datos
client.connect();

// Ejecutar una consulta
client.query('SELECT * FROM tu_tabla', (err, res) => {
  if (err) {
    console.error('Error al ejecutar consulta', err);
    return;
  }
  console.log('Datos:', res.rows);
});

// Cerrar la conexión cuando hayas terminado
client.end();
