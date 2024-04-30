import express from 'express'
import cors from 'cors'
import { PORT } from './constants'
import { config } from 'dotenv'
import { router } from './router'

config()

const app = express()


app
    .use(cors())
    .use('/api', router)

const start = async () => { 
    try { 
        app.listen(PORT)
    } catch(error) { 
        console.log({ error })
    }
}

start() 