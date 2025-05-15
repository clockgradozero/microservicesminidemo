import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './persona.entity';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepo: Repository<Persona>,
  ) {}

  async getPersonaById(id_persona: number): Promise<Persona | null> {
    return this.personaRepo.findOne({ where: { id_persona } });
  }

  async getPersonas(): Promise<Persona[]> {
    return this.personaRepo.find();
  }
}
