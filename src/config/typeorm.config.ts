/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {

    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'typeorm_relations',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
        // 'node_modules/nestjs-admin/**/*.entity.js',
    ],
    synchronize: true,


}