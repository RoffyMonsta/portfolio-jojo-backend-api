import { IStand } from './stand.interface';

export interface ICharacter {
  id: string,
  name: string,
  japaneseName: string,
  image: string,
  abilities?: string[],
  nationality?: string,
  catchphrase?: string,
  family?: string[],
  chapter: string[],
  living: boolean,
  isHuman: boolean
}

export interface ICharacterWithStands extends ICharacter {
  stands: IStand[];
}