import msql from 'mysql'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME } from '../constants'

const poolConnectionOptions = { 
    host: DB_HOST, 
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
}

const init = () => { 
    const connection = msql.createPool(poolConnectionOptions)

    return connection
}

export const connectionInstance = init()