import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupo } from './grupo.entity';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Grupo])],
  controllers: [GrupoController],
  providers: [GrupoService],
})
export class GrupoModule {}
