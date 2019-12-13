import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { PlanesEntity } from './planes.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class PlanesService extends TypeOrmCrudService<PlanesEntity> {
    constructor(@InjectRepository(PlanesEntity) repo) {
        super(repo)
    }

    async planesUsuario(agenteId : number) {
        const planes = await getRepository(PlanesEntity)
            .createQueryBuilder('planes')
            .where("planes.agenteid = :agenteId", { agenteId })
            .orWhere("planes.isinitialplan = true")
            .getMany();
        return planes
    }
}