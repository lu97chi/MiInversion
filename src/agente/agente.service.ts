import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AgenteEntity } from './agente.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class AgenteService {
    constructor(@InjectRepository(AgenteEntity) repo) {}

    login(username: string, password: string) {
        console.log(username, password);
    }

    async register(username: string, password: string, firstname: string, lastname: string) {
        if (!username || !password || !firstname || !lastname) {
            throw new BadRequestException("Ingrese todos los datos")
        }
        const usernameRequest = await getRepository(AgenteEntity)
        .createQueryBuilder('agentes')
        .where("agentes.username = :username", { username })
        .getOne()
        console.log(usernameRequest)
        // const response = await getRepository(AgenteEntity)
        // .createQueryBuilder('agentes')
        // .insert()
        // .values({ firstname, lastname , username , password })
        // .execute()
        // console.log(username, lastname, password, firstname, response);
    }
}
