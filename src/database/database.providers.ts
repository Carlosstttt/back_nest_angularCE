import { DataSource } from "typeorm";
import { ConfigService } from "../config/config.service"; 
import { Configuration } from "../config/config.key";

export const databaseProvider = [
    {
        provide: "DATABASE_CONNECTION", 
        inject: [ConfigService], 
        useFactory: async (config: ConfigService) => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: config.get(Configuration.HOST) || 'localhost',
                // Aquí lee el puerto de tu archivo .env.development (5432) y lo convierte a número
                port: parseInt(config.get(Configuration.PORT)), 
                username: config.get(Configuration.USERNAME)||'root',
                password: config.get(Configuration.PASSWORD)||'prueba',
                database: config.get(Configuration.DATABASE),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true, 
            });

            return dataSource.initialize();
        }
    }
];