import { Controller, Post, Body, Get } from '@nestjs/common';
import { AgenteService } from './agente.service';
import { AgenteEntity } from './agente.entity';


@Controller('agente')
export class AgenteController {
  constructor(public service: AgenteService) {}

    @Post('login')
    login(@Body() body : {username: string, password: string}){
      const { username, password } = body;
      return this.service.login(username, password)
    }
    
    @Post('register')
    register(@Body() body) {
      const { username, password, firstname, lastname } = body
      return this.service.register(username, password, firstname, lastname)
    }
}
