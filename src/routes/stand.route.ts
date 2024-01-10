import express, { Router } from 'express';
import StandController from '../controller/stand.controller';

export default function getStandRoute(): Router {
  const router = express.Router();
  const controller = new StandController();

  router.get('/', controller.getAllStands.bind(controller));
  router.get('/query/:query', controller.getStandsByQuery.bind(controller));
  router.get('/random', controller.getRandomStand.bind(controller));
  router.get('/:id', controller.getStandById.bind(controller));

  return router;
}