import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { genSaltSync, hashSync, compare } from 'bcryptjs';

import { AgenteEntity } from './agente.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class AgenteService {
    constructor(@InjectRepository(AgenteEntity) repo) {}

    async login(username: string, password: string) {
        if (!username || !password) {
            throw new BadRequestException("Ingrese todos los datos")
        }
        const user = await getRepository(AgenteEntity)
            .createQueryBuilder('agente')
            .where("agente.username = :username", { username })
            .getOne()
        if (!user) {
            throw new BadRequestException("No se encontro el usuario buscado")
        } else {
            const isUser = await compare(password, user.password);
            if (isUser) return { success: true, response: 'Agente autenticado'}
            throw new BadRequestException("Contraseña incorrecta")
        }
    }

    async register(username: string, password: string, firstname: string, lastname: string) {
        if (!username || !password || !firstname || !lastname) {
            throw new BadRequestException("Ingrese todos los datos")
        }
        const usernameRequest = await getRepository(AgenteEntity)
            .createQueryBuilder('agentes')
            .where("agentes.username = :username", { username })
            .getOne()
        if (usernameRequest) {
            throw new BadRequestException("Nombre de usuario ya elegido, seleccione otro");
        } else {
            const salt = genSaltSync(10);
            const hashedPassword = hashSync(password, salt);
            await getRepository(AgenteEntity)
                .createQueryBuilder('agentes')
                .insert()
                .values({ firstname, lastname , username , password: hashedPassword })
                .execute()
            return {success: true, response: 'Agente creado'}
        }
    }
}
