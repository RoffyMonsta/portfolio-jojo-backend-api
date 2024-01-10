import path from 'path';
import AppDataSource from '../data-source';
import * as fs from 'fs';
import { CharacterEntity } from '../entities/character.entity';
import { ICharacter } from '../../interface/character.interface';
import { IStand } from '../../interface/stand.interface';
import { StandEntity } from '../entities/stand.entity';


export default class Seeder {

  public async prefillData() {

    try {
      await AppDataSource.initialize();

      // characters
      const charactersJsonFile = path.join(__dirname, '../../../data', 'characters.json');
      const characters: ICharacter[]  = JSON.parse(fs.readFileSync(charactersJsonFile, 'utf8'));

      // stands

      const standsJsonFile = path.join(__dirname, '../../../data', 'stands.json');
      const stands: IStand[]  = JSON.parse(fs.readFileSync(standsJsonFile, 'utf8'));

      await AppDataSource.transaction(async (transactionalEntityManager) => {
        for (const data of characters) {
          const entity = transactionalEntityManager.create(CharacterEntity, data);
          await transactionalEntityManager.save(entity);
        }

        for (const data of stands) {
          const entity = transactionalEntityManager.create(StandEntity, data);
          await transactionalEntityManager.save(entity);
        }
      });
      
  
      console.log('Data inserted successfully.');
    } catch (error) {
      console.error('Error populating the database:', error);
    }
  }
}

const seeder = new Seeder();
seeder.prefillData();