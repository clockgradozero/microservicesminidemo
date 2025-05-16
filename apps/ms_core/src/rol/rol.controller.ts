import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RolService } from './rol.service';
import { Rol } from './rol.entity';

@Controller()
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @MessagePattern({ cmd: 'get-rol-by-id' })
  async getRolById(@Payload() id_rol: number): Promise<Rol | null> {
    return this.rolService.getRolById(id_rol);
  }

  @MessagePattern({ cmd: 'get-roles' })
  async getRols(): Promise<Rol[]> {
    return this.rolService.getRols();
  }
}
