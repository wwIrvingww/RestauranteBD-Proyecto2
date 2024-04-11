const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'restaurantesdb.cvpznx9yle9l.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: '123456789',
    port: 5432,
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}