import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanesService } from './planes.service';
import { PlanesController } from './planes.controller';
import { PlanesEntity } from './planes.entity';


@Module({
    imports: [TypeOrmModule.forFeature([ PlanesEntity ])],
    controllers: [PlanesController],
    providers: [PlanesService]
})
export class PlanesModule {}