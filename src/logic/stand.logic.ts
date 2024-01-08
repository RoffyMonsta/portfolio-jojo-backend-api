import { ILike } from 'typeorm';
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

  public async getStandsByQuery(queries: Record<string, string>): Promise<IStand[]> {
    try {
      const whereCondition: Record<string, any> = {};
      for (const query in queries) {
        whereCondition[query] = ILike(`%${queries[query]}%`);
      }
  
      const stands: IStand[] = await AppDataSource.getRepository(StandEntity)
        .find({ where: whereCondition }) as IStand[];
  
      return stands;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async getRandomStand(): Promise<IStand> {
    try {
      const stand = await AppDataSource.getRepository(StandEntity)
        .createQueryBuilder()
        .select()
        .orderBy('RANDOM()')
        .getOne();
      return stand || null!;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}