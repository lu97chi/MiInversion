import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { PlanesEntity } from './planes.entity';

@Injectable()
export class PlanesService extends TypeOrmCrudService<PlanesEntity> {
    constructor(@InjectRepository(PlanesEntity) repo) {
        super(repo)
    }
}