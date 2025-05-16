import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AlumnoModule } from './alumno/alumno.module';
import { PersonaModule } from './persona/persona.module';
import { RolModule } from './rol/rol.module';
import { SpModule } from './sp/sp.module';

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
        schemas: ['cor'],
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),    
    AlumnoModule,
    PersonaModule,
    RolModule,
    SpModule
  ],
})
export class AppModule {}
