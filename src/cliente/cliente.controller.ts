import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';
import { ClienteEntity } from './cliente.entity';
import { ClienteService } from './cliente.service';

// @UseGuards(AuthGuard('local'))
@Crud({
  model: {
    type: ClienteEntity,
  },
})
@Controller('cliente')
export class ClienteController {
  constructor(private service: ClienteService) {}
}
