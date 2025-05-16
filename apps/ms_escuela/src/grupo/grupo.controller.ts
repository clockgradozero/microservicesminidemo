import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Grupo } from './grupo.entity';
import { GrupoService } from './grupo.service';

@Controller()
export class GrupoController {
  constructor(
    private readonly grupoService: GrupoService
  ) {}

  @MessagePattern({ cmd: 'get-grupos' })
  async getGrupos(): Promise<Grupo[]> {
    return this.grupoService.getGrupos();
  }

  @MessagePattern({ cmd: 'get-grupo-by-id' })
  async getGrupoById(@Payload() id_grupo: number): Promise<Grupo | null> {
    return this.grupoService.getGrupoById(id_grupo);
  }

  @MessagePattern({ cmd: 'get-alumno-by-grupo' })
    async getAlumnoByGrupo(@Payload() id_grupo: number): Promise<number> {
    return this.grupoService.getAlumnoByGrupo(id_grupo);
  }
  
}
