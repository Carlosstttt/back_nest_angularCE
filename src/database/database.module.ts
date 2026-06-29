import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigService } from '../config/config.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { Configuration } from '../config/config.key'; // 

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        // Ahora sí, ambos usan exactamente la misma configuración centralizada:
        host: config.get(Configuration.HOST),
        port: parseInt(config.get(Configuration.PORT)), 
        username: config.get(Configuration.USERNAME),
        password: config.get(Configuration.PASSWORD),
        database: config.get(Configuration.DATABASE),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
  ],
  providers: [...databaseProvider, ConfigService],
  exports: [...databaseProvider, TypeOrmModule], 
})
export class DatabaseModule {}