import { Module } from '@nestjs/common';
import { RendimientoController } from './rendimiento.controller';
import { RendimientoService } from './rendimiento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RendimientoEntity } from './rendimiento.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RendimientoEntity])],
    providers: [RendimientoService],
    controllers: [RendimientoController]
})
export class RedimientoModule {}