import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PersonaService } from './persona.service';
import { Persona } from './persona.entity';

@Controller()
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @MessagePattern({ cmd: 'get-persona-by-id' })
  async getPersonaById(@Payload() id_persona: number): Promise<Persona | null> {
    return this.personaService.getPersonaById(id_persona);
  }

  @MessagePattern({ cmd: 'get-personas' })
  async getPersonas(): Promise<Persona[]> {
    return this.personaService.getPersonas();
  }
}
