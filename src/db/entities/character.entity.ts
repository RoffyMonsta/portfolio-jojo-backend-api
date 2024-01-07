/* eslint-disable import/no-extraneous-dependencies */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StandEntity } from './stand.entity';

@Entity()
export class CharacterEntity {

  @PrimaryGeneratedColumn('uuid')
    id!: string;

  @Column()
    name!: string;

  @Column()
    japaneseName!: string;

  @Column()
    image!: string;

  @Column('simple-array', { nullable: true })
    abilities?: string[];

  @Column({ nullable: true })
    nationality?: string;

  @Column({ nullable: true })
    catchphrase?: string;

  @Column('simple-array', { nullable: true })
    family?: string[];

  @Column('simple-array')
    chapter!: string[];

  @Column()
    living!: boolean;

  @Column()
    isHuman!: boolean;

  @OneToMany(() => StandEntity, (stand: StandEntity) => stand.character)
    stands!: StandEntity[];
}