import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Rol } from '../rol/rol.entity';

@Entity({ schema: 'cor', name: 'persona' })
export class Persona {

  @PrimaryColumn({ name: 'id_persona' })
  id_persona: number;

  @Column()
  nombre: string;
 
  @ManyToOne(() => Rol, {eager: true} )
  @JoinColumn({ name: 'id_rol', referencedColumnName: 'id_rol' }) // 👈 clave
  rol: Rol;

}
