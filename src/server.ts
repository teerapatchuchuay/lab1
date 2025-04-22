import express, { Request, Response } from 'express';
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json()); 

app.get('/', (req: Request, res: Response) => {
  res.send('สวัสดีจาก Express + TypeScript');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
