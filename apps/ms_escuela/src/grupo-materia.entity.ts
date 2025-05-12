import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Grupo } from './grupo/grupo.entity';
import { Materia } from './materia/materia.entity';

@Entity({ schema: 'esc' })
export class GrupoMateria {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Grupo)
  @JoinColumn({ name: 'id_grupo', referencedColumnName: 'id_grupo' })
  grupo: Grupo;

  @ManyToOne(() => Materia)
  @JoinColumn({ name: 'id_materia', referencedColumnName: 'id_materia' })
  materia: Materia;
}
