import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SpService } from './sp.service';

@Controller()
export class SpController {
  constructor(
    private readonly spService: SpService
  ) {}

  @MessagePattern({ cmd: 'get-edad-alumno' })
    async getEdadAlumno(@Payload() id_alumno: number): Promise<number> {
    return this.spService.getEdadAlumno(id_alumno);
    }

}
