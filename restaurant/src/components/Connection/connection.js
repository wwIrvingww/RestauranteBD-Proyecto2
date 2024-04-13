import pkg from 'pg';
const { Pool } = pkg;

const pool = new  Pool({
    user: 'postgres',
    host: 'restaurantesdb.cvpznx9yle9l.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: '123456789',
    port: 5432

})


const getClient = () =>{
    return pool
}

export default getClient;

