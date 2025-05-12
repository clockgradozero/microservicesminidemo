import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ schema: 'esc' })
export class Grupo {
  @PrimaryGeneratedColumn()
  id_grupo: number;

  @Column()
  nombre: string;

  // @OneToMany(() => GrupoMateria, gm => gm.grupo)
  // grupoMaterias: GrupoMateria[];
}
