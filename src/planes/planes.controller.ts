import { Controller } from '@nestjs/common';
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
    constructor(public service: PlanesService){}
}