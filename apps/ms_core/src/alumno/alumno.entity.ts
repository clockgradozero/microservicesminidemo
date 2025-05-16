import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'alumno', schema: process.env.DB_SCHEMA || 'cor' })
export class Alumno {
  @PrimaryGeneratedColumn()
  id_alumno: number;

  @Column()
  matricula: string;

  // Agrega más columnas si es necesario
}
