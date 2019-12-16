import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { genSaltSync, hashSync, compare } from 'bcryptjs';

import { AgenteEntity } from './agente.entity';
import { getRepository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AgenteService {
  constructor(
    @InjectRepository(AgenteEntity) repo,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    if (!username || !password) {
      return { success: false, response: 'Ingrese todos los datos' };
    }
    const user = await getRepository(AgenteEntity)
      .createQueryBuilder('agente')
      .where('agente.username = :username', { username })
      .getOne();
    if (!user) {
      return { success: false, response: 'No se encontro el usuario buscado' };
    } else {
      const isUser = await compare(password, user.password);
      const { firstname, id, lastname, username } = user;
      if (isUser)
        return {
          success: true,
          response: {
            message: 'Acceso correcto',
            data: { firstname, lastname, username, id },
            access_token: this.jwtService.sign({
              firstname,
              id,
              lastname,
              username,
            }),
          },
        };
      return { success: false, response: 'Contraseña incorrecta' };
    }
  }

  async register(
    username: string,
    password: string,
    firstname: string,
    lastname: string,
  ) {
    if (!username || !password || !firstname || !lastname) {
      return { success: false, response: 'Ingrese todos los datos' };
    }
    const usernameRequest = await getRepository(AgenteEntity)
      .createQueryBuilder('agentes')
      .where('agentes.username = :username', { username })
      .getOne();
    if (usernameRequest) {
      return {
        success: false,
        response: 'Nombre de usuario ya elegido, seleccione otro',
      };
    } else {
      const salt = genSaltSync(10);
      const hashedPassword = hashSync(password, salt);
      await getRepository(AgenteEntity)
        .createQueryBuilder('agentes')
        .insert()
        .values({ firstname, lastname, username, password: hashedPassword })
        .execute();
      return { success: true, response: { message: 'Agente creado' } };
    }
  }
}
