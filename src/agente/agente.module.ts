import { Module } from '@nestjs/common';
import { AgenteService } from './agente.service';
import { AgenteController } from './agente.controller'
import { AgenteEntity } from './agente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [ 
      TypeOrmModule.forFeature([ AgenteEntity ]),
      JwtModule.register({
        secret: 'luchi',
        signOptions: { expiresIn: '60s' },
      }),
    ],
  controllers: [ AgenteController ],
  providers: [AgenteService]
})
export class AgenteModule {}
