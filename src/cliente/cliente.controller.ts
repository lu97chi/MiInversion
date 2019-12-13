import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ClienteEntity } from './cliente.entity';
import { ClienteService } from './cliente.service';


@Crud({
    model: {
        type: ClienteEntity
    }
})

@Controller('cliente')
export class ClienteController {
    constructor(private service: ClienteService){}
}