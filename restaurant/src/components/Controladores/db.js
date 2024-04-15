
import  getClient from "../Connection/connection.js"

const client = getClient()

export async function getUsers() {

    try {
        const result = await client.query(
            'SELECT * FROM usuario'
        )
        return result.rows
    } catch (err) {
        throw err
    }
}



export async function cantpedidos(fechainicio, fechafinal) {

    try {
        const result = await client.query(
            `with horario_pedidos as ( select generate_series(0, 23, 1) as hora_inicial, generate_series(1, 24, 1) as hora_final), pedidos_por_horario as ( select hp.hora_inicial, hp.hora_final, count(*) as cantidad_pedidos from horario_pedidos hp join cuenta c on extract(hour from c.hora_inicio) >= hp.hora_inicial and extract(hour from c.hora_inicio) < hp.hora_final join ordenes o on c.id = o.cuenta_id where c.fecha_cuenta between '${fechainicio}' and '${fechafinal}' group by hp.hora_inicial, hp.hora_final) select hora_inicial, hora_final, cantidad_pedidos from  pedidos_por_horario order by cantidad_pedidos desc ;`
        )
        return result.rows
    } catch (err) {
        throw err
    }
}


export async function getquejaporcomida(fechainicio, fechafinal) {

    try {
        const result = await client.query(
            `select count(id) as cantidad_quejas, alimento from quejac q where fecha between '2024-04-06' and '2024-06-04' group by alimento;`
            )
        return result.rows
    } catch (err) {
        throw err
    }
}



export async function listadoplato() {

    try {
        const result = await client.query(
            `select o.alimento,o."time", o."cuenta_id" as orden  from ordenes o join alimentos a on o.alimento = a.nombre where o.estado = false and a.tipo = 'alimento' order by time asc;`
            )
        return result.rows
    } catch (err) {
        throw err
    }
}


export async function listadobeb() {

    try {
        const result = await client.query(
            `select o.alimento,o."time", o."cuenta_id" as orden  from ordenes o join alimentos a on o.alimento = a.nombre where o.estado = false and a.tipo = 'bebida' order by time asc;`
            )
        return result.rows
    } catch (err) {
        throw err
    }
}




export async function getreporte(fechainicio, fechafinal) {

    try {
        const result = await client.query(
            `select alimento, count(alimento) as cantidad from ( select  fecha_cuenta , alimento from cuenta c join ordenes o on o.cuenta_id = c.id group by alimento, fecha_cuenta  having fecha_cuenta between '${fechainicio}' and '${fechafinal}') group by alimento order by cantidad desc limit 5;`
            )
        return result.rows
    } catch (err) {
        throw err
    }
}


export async function getreporteperso(fechainicio, fechafinal) {

    try {
        const result = await client.query(
            `select personal, string_agg(motivo, ', ')  from quejap q where fecha between '${fechainicio}' and '${fechafinal}' group by personal;`
            )
        return result.rows
    } catch (err) {
        throw err
    }
}

export async function getarea() {

    try {
        const result = await client.query(
            'select nombre from area;'
        )
        return result.rows
    } catch (err) {
        throw err
    }
}


export async function get_mesas_area(area) {

    try {
        const result = await client.query(
            `select id, movable , capacidad  from mesas m  where table_area = '${area}' ;`
        )
        return result.rows
    } catch (err) {
        throw err
    }
}



// Los de jo tienen comentarios


export async function mesereficiencia(fechainicio, fechafinal) {

    try {
        const result = await client.query(
            `Select nombre, avg( (preg1+preg2)/2 ) as eficiencia from encuestas where fecha between '${fechainicio}' and '${fechafinal}' group by nombre; `
            )
        return result.rows
    } catch (err) {
        throw err
    }
}


export async function eatingtime(fechainicio, fechafinal) {

    try {
        const result = await client.query(
            `select cantidad_persons, avg(hora_fin-hora_inicio) as tiempo from cuenta where fecha_cuenta between '${fechainicio}' and '${fechafinal}' group by cantidad_persons `
            )
        return result.rows
    } catch (err) {
        throw err
    }
}


export async function estadoorden(estado, numberorder) {

    try {
        const result = await client.query(
            `update ordenes set estado = ${estado}  where no = ${numberorder} `
            )
        return result.rows
    } catch (err) {
        throw err
    }
}


export async function asignTable(table1, table2) {
    try {
        await client.query(
            `insert into table_union (table1, table2) values (${table1}, ${table2})`   
        )
    } catch (err) {
        throw err
    }
}

export async function createCuenta(fecha_cuenta, hora_inicio, mesa_id, cantidad_persons) {
    try {
        await client.query(
            `insert into cuenta (fecha_cuenta, hora_inicio, mesa_id, cantidad_persons) 
            values ('${fecha_cuenta}','${hora_inicio}',${mesa_id},${cantidad_persons})`
        )
    } catch (err) {
        throw err
    }
}





export async function registrar(nombre, contrasenia, rol) {

    try {
        const result = await client.query(
            `insert  into usuario values ( '${nombre}', '${contrasenia}', '${rol}' ) `)
        return result.rows
    } catch (err) {
        throw err
    }
}



export async function buscarusuario() {

    try {
        const result = await client.query(
            `select nombre, contrasena from usuario `)
        return result.rows
    } catch (err) {
        throw err
    }
}