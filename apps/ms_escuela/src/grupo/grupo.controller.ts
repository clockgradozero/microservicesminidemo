import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grupo } from './grupo.entity';

@Controller()
export class GrupoController {
  constructor(
    @InjectRepository(Grupo)
    private grupoRepo: Repository<Grupo>,
  ) {}

  @MessagePattern({ cmd: 'get-grupos' })
  async getGrupos(): Promise<Grupo[]> {
    return this.grupoRepo.find({});
  }

  @MessagePattern({ cmd: 'get-grupo-by-id' })
  async getGrupoById(@Payload() id_grupo: number): Promise<Grupo | null> {
    return this.grupoRepo.findOne({
      where: { id_grupo },
    });
  }
  
}
