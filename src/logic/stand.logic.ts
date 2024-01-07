import AppDataSource from '../db/data-source';
import { StandEntity } from '../db/entities/stand.entity';
import { IStand } from '../interface/stand.interface';
export default class StandLogic {

  public async getAllStands(): Promise<IStand[]> {
    try {
      const stands: IStand[] = await AppDataSource.getRepository(StandEntity).find();
      return stands;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async getStandById(id: string): Promise<IStand> {
    try {
      const stand: IStand = await AppDataSource.getRepository(StandEntity).findOneBy({ id }) as IStand;
      return stand;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}