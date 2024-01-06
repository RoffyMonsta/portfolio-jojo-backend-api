import { IStand } from '../interface/stand.interface';
export default class StandLogic {

  public async getAllStands() {
    try {
      const stands: IStand[] = require('./../../data/stands.json');
      return stands;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}