import express, { Router } from 'express';
import CharacterController from '../controller/character.controller';

export default function getCharacterRoute(): Router {
  const router = express.Router();
  const controller = new CharacterController();

  router.get('/all', controller.getAllCharacters.bind(controller));
  router.get('/:id', controller.getCharacterById.bind(controller));
  return router;
}