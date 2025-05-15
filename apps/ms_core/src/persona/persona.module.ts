import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './persona.entity';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  providers: [PersonaService],
  controllers: [PersonaController],
})
export class PersonaModule {}
