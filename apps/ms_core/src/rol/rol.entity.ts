import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ schema: 'cor', name: 'rol' }) 
export class Rol {
  
  @PrimaryColumn({ name: 'id_rol' }) 
  id_rol: number;

  @Column({ name: 'nombre_rol' }) 
  nombreRol: string;

}
