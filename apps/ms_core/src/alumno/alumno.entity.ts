import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'alumno', schema: process.env.DB_SCHEMA || 'esc' })
export class Alumno {
  @PrimaryGeneratedColumn()
  id_alumno: number;

  @Column()
  nombre: string;

  // Agrega más columnas si es necesario
}
