import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PlanesEntity } from 'src/planes/planes.entity';

@Entity('rendimientos')
export class RendimientoEntity {
  @PrimaryGeneratedColumn('increment') id: number;

  @Column('numeric')
  amount: number;

  // @ManyToOne(type  => PlanesEntity, planes => planes.id)
  // @JoinColumn()
  @Column('int')
  planid: number;

  @Column('int')
  clienteid: number;
}
