
import  getClient from "../Connection/connection.js"

const client = getClient()

export async function getUsers() {

    try {
        const result = await client.query(
            'SELECT * FROM ordenes'
        )
        return result.rows
    } catch (err) {
        throw err
    }
}


