import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('clientes')
export class ClienteEntity {
  @PrimaryGeneratedColumn('increment') id: number;

  @Column('varchar', { length: 50 })
  firstname: string;

  @Column('varchar', { length: 50 })
  lastname: string;

  @Column('varchar', { length: 20 })
  phone: string;
}
