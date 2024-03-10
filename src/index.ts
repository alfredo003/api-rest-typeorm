import express from 'express'

import { AppDataSource } from './data-source'

const app =express();
app.use(express.json());

app.get('/',(req,res)=>{
    return res.json('All ok');
})


AppDataSource.initialize().then(()=>{
    return app.listen(process.env.PORT)
})