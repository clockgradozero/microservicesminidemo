import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { EscuelaController } from './escuela.controller';

@Module({
  controllers: [CoreController, EscuelaController],
})
export class AppModule {}
