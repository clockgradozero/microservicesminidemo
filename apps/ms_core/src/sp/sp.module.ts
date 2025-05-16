import { Module } from '@nestjs/common';
import { SpController } from './sp.controller';
import { SpService } from './sp.service';

@Module({
  //imports: [TypeOrmModule.forFeature([Grupo])],
  controllers: [SpController],
  providers: [SpService],
})
export class SpModule {}
