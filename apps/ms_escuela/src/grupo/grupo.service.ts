import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grupo } from './grupo.entity';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(Grupo)
    private readonly grupoRepo: Repository<Grupo>,
  ) {}

  async getGrupos(): Promise<Grupo[]> {
    return this.grupoRepo.find();
  }

  async getGrupoById(id_grupo: number): Promise<Grupo | null> {
    return this.grupoRepo.findOne({
      where: { id_grupo },
    });
  }
}
