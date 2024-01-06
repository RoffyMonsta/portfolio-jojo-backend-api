import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import getAPIRouter from './routes';

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.use('/api/v1', getAPIRouter());

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    message: 'Not found',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});

export default app;