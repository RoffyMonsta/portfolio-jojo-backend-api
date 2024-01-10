import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import getAPIRouter from './routes';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'reflect-metadata';
import AppDataSource from './db/data-source';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

(async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.error('Error initializing the database:', error);
  }
})();

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

export const server = app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});

export default app;