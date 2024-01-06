import { ICharacter } from '../interface/character.interface';
export default class CharacterLogic {

  public async getAllCharacters(): Promise<ICharacter[]> {
    try {
      const characters: ICharacter[] = require('./../../data/characters.json');
      return characters;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async getCharacterById(id: string): Promise<ICharacter> {
    try {
      const characters: ICharacter[] = require('./../../data/characters.json');
      return characters.filter((character) => character.id === id)[0] || null;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}