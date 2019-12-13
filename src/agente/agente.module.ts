import { Module } from '@nestjs/common';
import { AgenteService } from './agente.service';
import { AgenteController } from './agente.controller'
import { AgenteEntity } from './agente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([ AgenteEntity ])],
  controllers: [ AgenteController ],
  providers: [AgenteService]
})
export class AgenteModule {}
