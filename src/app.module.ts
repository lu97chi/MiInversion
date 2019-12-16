import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { PlanesModule } from './planes/planes.module';
import { AgenteModule } from './agente/agente.module';
import { RedimientoModule } from './rendimiento/rendimiento.module';
import { ClientesModule } from './cliente/cliente.module';

@Module({
  imports: [ 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),   // <-- path to the static files
    }),
    TypeOrmModule.forRoot(), PokemonModule, PlanesModule, RedimientoModule, AgenteModule, ClientesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
