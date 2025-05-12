import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './persona.entity';

@Controller()
export class PersonaController {
  constructor(
    @InjectRepository(Persona) private personaRepo: Repository<Persona>,
  ) {}

  @MessagePattern({ cmd: 'get-personas' })
  async getAllRoles(): Promise<Persona[]> {
    return this.personaRepo.find( {});
  }

}
