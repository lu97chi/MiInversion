import { 
    Entity, Column, PrimaryGeneratedColumn
} from 'typeorm';

@Entity('agentes')
export class AgenteEntity {
    @PrimaryGeneratedColumn('increment') id: number
    
    @Column('varchar', { length: 50}) 
    firstname: string

    @Column('varchar', { length: 50}) 
    lastname: string

    @Column('varchar', { length: 50, unique: true}) 
    username: string
    
    @Column('varchar', { length: 50 })
    password: string

}