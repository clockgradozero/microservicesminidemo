import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Persona } from '../persona/persona.entity';


@Entity({ schema: 'cor', name: 'alumno' })
export class Alumno {
  @PrimaryGeneratedColumn({ name: 'id_alumno' })
  id_alumno: number;

  @Column()
  matricula: string;

  @OneToOne(() => Persona)
  @JoinColumn({ name: 'id_persona', referencedColumnName: 'id_persona' })
  persona: Persona;

  @Column({ name: 'id_grupo', nullable: true }) // <- Relación lógica
  id_grupo: number;

}
