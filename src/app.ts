import express from "express"
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.get('/health', (req: any, res: any) => {
  res.send('health information!')
})


export default app