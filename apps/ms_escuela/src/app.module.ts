import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupo } from './grupo/grupo.entity';
import { Materia } from './materia/materia.entity';
import { GrupoMateria } from './grupo-materia.entity';
import { GrupoController } from './grupo/grupo.controller';

@Module({

  controllers: [GrupoController],

  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '212.227.239.166',
      port: 5432,
      username: 'demonest',
      password: 'D3m0N3st',
      database: 'ms_escuela',
      schema: 'esc',
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Grupo, Materia, GrupoMateria]),
  ],
})
export class AppModule {}
