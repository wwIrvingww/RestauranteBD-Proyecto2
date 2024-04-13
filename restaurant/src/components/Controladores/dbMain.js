import express from 'express'
import {getUsers}  from './db.js'

const app = express()
const port = 4000


app.use(express.json())


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


