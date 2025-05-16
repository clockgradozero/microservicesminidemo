import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Grupo } from './grupo.entity';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(Grupo)
    private readonly grupoRepo: Repository<Grupo>,
    private readonly dataSource: DataSource
  ) {}

  async getGrupos(): Promise<Grupo[]> {
    return this.grupoRepo.find();
  }

  async getGrupoById(id_grupo: number): Promise<Grupo | null> {
    return this.grupoRepo.findOne({
      where: { id_grupo },
    });
  }

  async getAlumnoByGrupo(id: number): Promise<number> {
    const result = await this.dataSource.query(`select * from esc.get_alumnos_por_grupo($1);`, [id]);
    return result;
  }
  
}
