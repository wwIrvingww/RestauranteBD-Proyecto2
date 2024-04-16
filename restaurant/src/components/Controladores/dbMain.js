import express, { query } from 'express'
import cors from 'cors'

import {getUsers, getquejaporcomida, sacarfact ,registrar, buscarped ,estadoorden, buscarusuario ,getreporte, eatingtime , mesereficiencia, get_mesas_area, getarea, cantpedidos, getreporteperso, listadobeb ,listadoplato, asignTable, createCuenta, obtainCuentas, closeCuenta, obtainComida, obtainBebidas, setOrdenes, sendEncuesta }  from './db.js'

const app = express()
const port = 4000

app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}))


app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})

app.get('/' , async (req, res) => {
  res.send('Hola')
})


app.get('/usuario', async (req, res) => {

  try{
    const users = await getUsers()
    res.json(users)
  } catch(err){
    throw err
  }
})



app.get('/cpedidos/:fechainicio/:fechafinal', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.params.fechainicio, req.params.fechafinal]
    const users = await cantpedidos( fechainicio, fechafinal)
    res.json(users)
  } catch(err){
    throw err
  }
})



app.get('/gqueja/:fechainicio/:fechafinal', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.params.fechainicio, req.params.fechafinal]
    const users = await getquejaporcomida( fechainicio, fechafinal)
    res.json(users)
  } catch(err){
    throw err
  }
})


app.get('/listplat', async (req, res) => {

  try{
    const users = await listadoplato()
    res.json(users)
  } catch(err){
    throw err
  }
})


app.get('/listbebidas', async (req, res) => {

  try{
    const users = await listadobeb()
    res.json(users)
  } catch(err){
    throw err
  }
})


// #Prince

app.get('/report_1/:fechainicio/:fechafinal', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.params.fechainicio, req.params.fechafinal]
    const users = await getreporte( fechainicio, fechafinal)
    res.json(users)
  } catch(err){
    throw err
  }
})

app.get('/report_4/:fechainicio/:fechafinal', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.params.fechainicio, req.params.fechafinal]
    const users = await getreporteperso( fechainicio, fechafinal)
    res.json(users)
  } catch(err){
    throw err
  }
})


app.get('/get_areas', async (req, res) => {

  try{
    const users = await getarea()
    res.json(users)
  } catch(err){
    throw err
  }
})



app.get('/get_mesas_area/:area', async (req, res) => {

  const {area} = req.params

  try{
    const users = await get_mesas_area(area)
    res.json(users)
  } catch(err){
    throw err
  }
})

// tiempo de Andre

app.get('/eattime/:fechainicio/:fechafinal', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.params.fechainicio, req.params.fechafinal]
    const users = await eatingtime( fechainicio, fechafinal)
    res.json(users)
  } catch(err){
    throw err
  }
})


app.get('/meficiency/:fechainicio/:fechafinal', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.params.fechainicio, req.params.fechafinal]
    const users = await mesereficiencia( fechainicio, fechafinal)
    res.json(users)
  } catch(err){
    throw err
  }
})

app.put('/estadorden', async (req, res) => {

  try{
    const [ estado, numberorder ] = [req.body.estado, req.body.numberorder]
    const users = await estadoorden( estado, numberorder)
    res.json(users)
  } catch(err){
    throw err
  }
})


app.post('/union', async (req, res) => {
  const {
    table1, table2
  } = req.body
  if (!table1 || !table2) {
    res.status(400).json({ error: 'Datos incompletos en el cuerpo de la solicitud' })
  } else {
    await asignTable(table1, table2)
    res.status(200).json({ message: 'Union creada exitosamente' })
  }
})

app.post('/cuenta', async (req, res) => {
  const {
      fecha_cuenta, hora_inicio, mesa_id, cantidad_persons, abierta
  } = req.body;
  if (!fecha_cuenta || !hora_inicio || !mesa_id || !cantidad_persons || !abierta ) {
      res.status(400).json({ error: 'Datos incompletos en el cuerpo de la solicitud' });
  } else {
      await createCuenta(fecha_cuenta, hora_inicio, mesa_id, cantidad_persons, abierta);
      res.status(200).json({message: 'Cuenta abierta exitosamente'});
  }
});

app.get('/cuentas', async (req, res) => {
  try {
    const cuentas = await obtainCuentas()
    res.json(cuentas)
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

app.put('/cuenta/cerrar', async (req, res) => {
  const {
    nombre, nit, direccion, abierta, mesa_id, hora_fin
  } = req.body
  if (!nombre || !nit || !direccion || !abierta || !mesa_id || !hora_fin) {
    res.status(400).json({ error: 'Datos incompletos en el cuerpo de la solicitud' });
  } else {
    await closeCuenta(nombre, nit, direccion, abierta, mesa_id, hora_fin)
    res.status(200).json({message: 'Cuenta cerrada exitosamente'});
  }
})

app.get('/comida', async (req, res) => {
  try {
    const comida = await obtainComida()
    res.json(comida)
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

app.get('/bebida', async (req, res) => {
  try {
    const bebida = await obtainBebidas()
    res.json(bebida)
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

app.post('/newOrder', async (req, res) => {
  const {
    nombre, estado, time
  } = req.body;
  if (!nombre || !estado || !time ) {
      res.status(400).json({ error: 'Datos incompletos en el cuerpo de la solicitud' });
  } else {
      await setOrdenes(nombre, estado, time);
      res.status(200).json({message: 'Orden creada exitosamente'});
  }
})

app.post('/survey', async (req, res) => {
  const {
    id, nombre, fecha,res1, res2
  } = req.body
  if (!id || !nombre || !fecha || !res1 || !res2) {
    res.status(400).json({ error: 'Datos incompletos en el cuerpo de la solicitud' });
  } else {
    await sendEncuesta(id, nombre, fecha, res1, res2)
    res.status(200).json({message: 'Encuesta respuesta exitosamente'});
  }
})

app.post('/register', async (req, res) => {

  try{
    const [ nombre, contrasenia, rol ] = [req.body.nombre, req.body.contrasenia, req.body.rol]
    const users = await registrar( nombre, contrasenia, rol)
    res.json(users)
  } catch(err){
    throw err
  }
})



app.get('/searchuser', async (req, res) => {

  try{
    const users = await buscarusuario()
    res.json(users)
  } catch(err){
    throw err
  }
})


app.get('/pedido/:id', async (req, res) => {

  const {id} = req.params

  try{
    const users = await buscarped(id)
    res.json(users)
  } catch(err){
    throw err
  }
})

app.get('/ponerfactura/:id', async (req, res) => {

  const {id} = req.params
  try{
    const users = await sacarfact(id)
    res.json(users)
  } catch(err){
    throw err
  }
})