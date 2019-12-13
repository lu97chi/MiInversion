import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { RendimientoEntity } from './rendimiento.entity';
import { getRepository } from 'typeorm';
import { PlanesEntity } from 'src/planes/planes.entity';

@Injectable()
export class RendimientoService extends TypeOrmCrudService<RendimientoEntity> {
    constructor(@InjectRepository(RendimientoEntity) repo) {
        super(repo)
    }

    async getUsuarios() {
        const response = await getRepository(PlanesEntity)
        .createQueryBuilder("planes")
        .getMany()
        console.log(response);
    }
}