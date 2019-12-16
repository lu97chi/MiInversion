import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
// import { RendimientoEntity } from 'src/rendimiento/rendimiento.entity';

@Entity('planes')
export class PlanesEntity {
  @PrimaryGeneratedColumn('increment') id: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column({ type: 'decimal', precision: 14, scale: 3 })
  mininvest: number;

  @Column({ type: 'decimal', precision: 14, scale: 3 })
  maxinvest: number;

  @Column({ type: 'decimal', precision: 10, scale: 3 })
  monthlyrate: number;

  @Column('int')
  duration: number;

  @Column('int')
  agenteid: number;

  @Column('boolean')
  isinitialplan: boolean;

  // @OneToMany(type  => RendimientoEntity, rendimiento => rendimiento.id)
  // @JoinColumn()
  // rendimientos: RendimientoEntity[]
}
