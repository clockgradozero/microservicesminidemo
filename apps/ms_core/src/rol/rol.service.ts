import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepo: Repository<Rol>,
  ) {}

  async getRolById(id_rol: number): Promise<Rol | null> {
    return this.rolRepo.findOne({ where: { id_rol } });
  }

  async getRols(): Promise<Rol[]> {
    return this.rolRepo.find();
  }
}
