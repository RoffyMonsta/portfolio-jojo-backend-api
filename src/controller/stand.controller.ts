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
}