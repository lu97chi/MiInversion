import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClienteService } from './cliente.service';
import { ClienteEntity } from './cliente.entity';
import { ClienteController } from './cliente.controller';

@Module({
    imports: [ TypeOrmModule.forFeature([ClienteEntity])],
    controllers: [ClienteController],
    providers: [ClienteService]
})
export class ClientesModule {}