import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GrupoModule } from './grupo/grupo.module';

@Module({
  imports: [    
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({ 
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: +(config.get<number>('DB_PORT') ?? 5432),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        schemas: ['esc','pla'],
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),    
    GrupoModule,
  ],
})
export class AppModule {}
