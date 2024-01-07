import AppDataSource from '../db/data-source';
import { CharacterEntity } from '../db/entities/character.entity';
import { StandEntity } from '../db/entities/stand.entity';
import { ICharacter, ICharacterWithStands } from '../interface/character.interface';
import { IStand } from '../interface/stand.interface';
export default class CharacterLogic {

  public async getAllCharacters(): Promise<ICharacter[]> {
    try {
      const characters: ICharacter[] = await AppDataSource.getRepository(CharacterEntity).find();
      return characters;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async getCharacterById(id: string): Promise<ICharacterWithStands> {
    try {
      const character: ICharacter = await AppDataSource.getRepository(CharacterEntity).findOneBy({ id }) as ICharacter;
      const standsOfCharacter: IStand[] = await AppDataSource.getRepository(StandEntity).findBy({ characterId: id }) as IStand[];
      return { ...character, stands: standsOfCharacter };
    } catch (err: any) {
      throw new Error(err);
    }
  }
}