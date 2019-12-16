import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ClienteEntity } from './cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteService extends TypeOrmCrudService<ClienteEntity> {
  constructor(@InjectRepository(ClienteEntity) repo) {
    super(repo);
  }
}
