import express, { Router } from 'express';
import StandController from '../controller/stand.controller';

export default function getStandRoute(): Router {
  const router = express.Router();
  const controller = new StandController();

  router.get('/all', controller.getAllStands.bind(controller));
  return router;
}