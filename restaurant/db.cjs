const conn = require('./connection.cjs');

const getUsers = async () => {
    try {
        const result = await conn.query(
            'SELECT * FROM ordenes'
        )
        return result.rows
    } catch (err) {
        throw new Error('Error interno del servidor')
    }
}


module.exports = {
    getUsers,
  }