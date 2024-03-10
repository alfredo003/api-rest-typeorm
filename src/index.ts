import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'

const app =express();
app.use(express.json());

app.use(routes)


AppDataSource.initialize().then(()=>{
    return app.listen(process.env.PORT)
})