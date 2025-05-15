import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'rol', schema: process.env.DB_SCHEMA || 'esc' })
export class Rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column()
  nombre: string;

  // Agrega más columnas si es necesario
}
