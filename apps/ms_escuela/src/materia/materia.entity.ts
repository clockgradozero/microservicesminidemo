import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GrupoMateria } from '../grupo-materia.entity';

@Entity({ schema: 'esc' })
export class Materia {
  @PrimaryGeneratedColumn()
  id_materia: number;

  @Column()
  nombre: string;

  // @OneToMany(() => GrupoMateria, gm => gm.materia)
  // grupoMaterias: GrupoMateria[];
}
