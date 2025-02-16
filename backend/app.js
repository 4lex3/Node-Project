import express from 'express'
import cors from 'cors'
import { router } from './routes/routes.js'

const app = express();

app.use(cors());          
app.use(express.json());  
app.use('/', router); 


app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
