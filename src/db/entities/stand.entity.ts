/* eslint-disable import/no-extraneous-dependencies */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CharacterEntity } from './character.entity';

@Entity()
export class StandEntity {

  @PrimaryGeneratedColumn('uuid')
    id!: string;
  
  @Column()
    name!: string;

  @Column({ nullable: true })
    alternateName?: string;

  @Column()
    japaneseName!: string;

  @Column()
    image!: string;

  @Column('simple-array')
    chapter!: string[];

  @Column('simple-array')
    abilities!: string[];

  @Column({ nullable: true })
    battlecry?: string;

  @ManyToOne(() => CharacterEntity, (character: CharacterEntity) => character.stands)
    character!: CharacterEntity;

  @Column()
    characterId!: string;
}
