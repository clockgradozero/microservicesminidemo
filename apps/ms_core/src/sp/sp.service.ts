import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class SpService {
  constructor(private readonly dataSource: DataSource) {}
    
  async getEdadAlumno(id: number): Promise<number> {
    const result = await this.dataSource.query(`SELECT cor.get_edad_alumno($1)`, [id]);
    return result;
    //return result[0]?.get_edad_alumno ?? null;
  }

  async getAlumno(id: number): Promise<number> {
    const result = await this.dataSource.query(`Select * from cor.get_datos_alumno($1);`, [id]);
    return result;
  }
  
}
