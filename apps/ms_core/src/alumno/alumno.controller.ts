import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AlumnoService } from './alumno.service';
import { Alumno } from './alumno.entity';

@Controller()
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @MessagePattern({ cmd: 'get-alumno-by-id' })
  async getAlumnoById(@Payload() id_alumno: number): Promise<Alumno | null> {
    return this.alumnoService.getAlumnoById(id_alumno);
  }

  @MessagePattern({ cmd: 'get-alumnos' })
  async getAlumnos(): Promise<Alumno[]> {
    return this.alumnoService.getAlumnos();
  }
}
