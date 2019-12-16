import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { QueryRunner } from 'typeorm';
import { RendimientoEntity } from './rendimiento.entity';
import { RendimientoService } from './rendimiento.service';

@Crud({
  model: {
    type: RendimientoEntity,
  },
})
@Controller('rendimiento')
export class RendimientoController {
  constructor(public service: RendimientoService) {}

  @Get('usuarios')
  getUsuarios() {
    return this.service.getUsuarios();
  }
}
