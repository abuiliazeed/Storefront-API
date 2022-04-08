import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import dbclient from './db/db'


dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))

dbclient.connect().then((client) =>{
  client.query('SELECT NOW()',(err,res)=>{
    console.log(`Environment: ${process.env.ENV}`)
    console.log(res.rows)
    client.release() 
  })
})

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'server is running'
  })
})

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`)
})

export default app