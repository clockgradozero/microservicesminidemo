import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'persona', schema: process.env.DB_SCHEMA || 'cor' })
export class Persona {
  @PrimaryGeneratedColumn()
  id_persona: number;

  @Column()
  nombre: string;

  // Agrega más columnas si es necesario
}
