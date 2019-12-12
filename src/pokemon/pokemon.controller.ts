import { Controller, Post } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { PokemonService } from './pokemon.service';
import { PokemonEntity } from './pokemon.entity';

@Crud({
    model: {
        type: PokemonEntity
    }
})

@Controller('pokemon')
export class PokemonController {
  constructor(public service: PokemonService) {}
}
