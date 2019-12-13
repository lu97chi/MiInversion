import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { PlanesModule } from './planes/planes.module';
import { AgenteModule } from './agente/agente.module';
import { RedimientoModule } from './rendimiento/rendimiento.module';
import { ClientesModule } from './cliente/cliente.module';

@Module({
  imports: [ TypeOrmModule.forRoot(), PokemonModule, PlanesModule, RedimientoModule, AgenteModule, ClientesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
