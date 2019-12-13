import { Controller, Get, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { PlanesService } from './planes.service';
import { PlanesEntity } from './planes.entity';

@Crud({
    model: {
        type: PlanesEntity
    }
})

@Controller('planes')
export class PlanesController {
    constructor(private service: PlanesService){}

    @Get('usuario/:agenteId')
    planesUsuario(@Param('agenteId') agenteId: number) {
        return this.service.planesUsuario(agenteId)
    }
}