import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './alumno.entity';

@Controller()
export class AlumnoController {
  constructor(
    @InjectRepository(Alumno)
    private readonly alumnoRepo: Repository<Alumno>,
  ) {}

  @MessagePattern({ cmd: 'get-alumnos' })
  async getAlumnos(): Promise<Alumno[]> {
    return this.alumnoRepo.find({});
  }

  @MessagePattern({ cmd: 'get-alumno-by-id' })
  async getAlumnoById(id_alumno: number): Promise<Alumno | null> {
    return this.alumnoRepo.findOne({
      where: { id_alumno },
      relations: ['persona'],
    });
  }
}
