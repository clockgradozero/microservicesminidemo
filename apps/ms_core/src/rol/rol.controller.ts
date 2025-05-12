import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Rol } from './rol.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class RolController {
  constructor(
    @InjectRepository(Rol) private rolRepo: Repository<Rol>,
  ) {}

  @MessagePattern({ cmd: 'get-roles' })
  async getAllRoles(): Promise<Rol[]> {
    return this.rolRepo.find( {});
  }

}
