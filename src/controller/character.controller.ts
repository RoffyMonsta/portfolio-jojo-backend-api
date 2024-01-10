import CharacterLogic from '../logic/character.logic';
import { Request, Response } from 'express';
export default class CharacterController {
  public async getAllCharacters(req: Request, res: Response) {
    const logic = new CharacterLogic();
    try {
      const result = await logic.getAllCharacters();
      res.json({
        characters: result,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
      });
    }
  }

  public async getCharacterById(req: Request, res: Response) {
    const logic = new CharacterLogic();
    try {
      const result = await logic.getCharacterById(req.params.id);
      res.json({
        character: result,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
      });
    }
  }

  public async getCharactersByQuery(req: Request, res: Response) {
    const queries = req.query as Record<string, string>;
    const logic = new CharacterLogic();

    if (!queries || typeof queries !== 'object' || Object.keys(queries).length === 0) {
      return res.status(400).json({ error: 'Invalid queries.' });
    }
    try {
      const result = await logic.getCharactersByQuery(queries);
      res.json({
        characters: result,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
      });
    }
  }

  public async getRandomCharacter(req: Request, res: Response) {
    const logic = new CharacterLogic();
    try {
      const result = await logic.getRandomCharacter();
      res.json({
        character: result,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
      });
    }
  }
}