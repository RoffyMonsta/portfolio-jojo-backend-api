import express, { Router } from 'express';
import getCharacterRoute from './character.route';
import getStandRoute from './stand.route';

export default function getAPIRouter(): Router {
  const router = express.Router();

  router.use('/characters', getCharacterRoute());
  router.use('/stands', getStandRoute());
  return router;
}