import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './alumno.entity';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private readonly alumnoRepo: Repository<Alumno>,
  ) {}

  async getAlumnoById(id_alumno: number): Promise<Alumno | null> {
    return this.alumnoRepo.findOne({ where: { id_alumno } });
  }

  async getAlumnos(): Promise<Alumno[]> {
    return this.alumnoRepo.find();
  }
}
