import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './rol/rol.entity';
import { Persona } from './persona/persona.entity';
import { Alumno } from './alumno/alumno.entity';
import { RolController } from './rol/rol.controller';
import { PersonaController } from './persona/persona.controller';
import { AlumnoController } from './alumno/alumno.controller';


@Module({
  controllers: [RolController, PersonaController, AlumnoController],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '212.227.239.166',
      port: 5432,
      username: 'demonest',
      password: 'D3m0N3st',
      database: 'ms_core',
      schema: 'cor',
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Rol, Persona, Alumno]),
  ],
})
export class AppModule {}
