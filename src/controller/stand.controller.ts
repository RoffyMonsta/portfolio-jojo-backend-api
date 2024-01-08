import { Request, Response } from 'express';
import StandLogic from '../logic/stand.logic';
export default class StandController {
  public async getAllStands(req: Request, res: Response) {
    const logic = new StandLogic();
    try {
      const result = await logic.getAllStands();
      res.json({
        stands: result,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
      });
    }
  }

  public async getStandById(req: Request, res: Response) {
    const logic = new StandLogic();
    try {
      const result = await logic.getStandById(req.params.id);
      res.json({
        stand: result,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
      });
    }
  }

  public async getStandsByQuery(req: Request, res: Response) {
    const queries = req.query as Record<string, string>;
    const logic = new StandLogic();

    if (!queries || typeof queries !== 'object' || Object.keys(queries).length === 0) {
      return res.status(400).json({ error: 'Invalid queries.' });
    }
    try {
      const result = await logic.getStandsByQuery(queries);
      res.json({
        characters: result,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
      });
    }
  }

  public async getRandomStand(req: Request, res: Response) {
    const logic = new StandLogic();
    try {
      const result = await logic.getRandomStand();
      res.json({
        stand: result,
      });
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
      });
    }
  }
}