import express from 'express'
import cors from 'cors'
import {getUsers, getquejaporcomida,estadoorden ,getreporte, eatingtime , mesereficiencia, get_mesas_area, getarea, cantpedidos, getreporteperso, listadobeb ,listadoplato}  from './db.js'

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



app.get('/cpedidos', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.body.fechainicio, req.body.fechafinal]
    const users = await cantpedidos( fechainicio, fechafinal)
    res.json(users)
  } catch(err){
    throw err
  }
})



app.get('/gqueja', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.body.fechainicio, req.body.fechafinal]
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

app.get('/report_1', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.body.fechainicio, req.body.fechafinal]
    const users = await getreporte( fechainicio, fechafinal)
    res.json(users)
  } catch(err){
    throw err
  }
})

app.get('/report_4', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.body.fechainicio, req.body.fechafinal]
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



app.get('/get_mesas_area/:id', async (req, res) => {

  const {id} = req.params

  try{
    const users = await get_mesas_area(id)
    res.json(users)
  } catch(err){
    throw err
  }
})

// tiempo de Andre

app.get('/eattime', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.body.fechainicio, req.body.fechafinal]
    const users = await eatingtime( fechainicio, fechafinal)
    res.json(users)
  } catch(err){
    throw err
  }
})


app.get('/meficiency', async (req, res) => {

  try{
    const [ fechainicio, fechafinal ] = [req.body.fechainicio, req.body.fechafinal]
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
