/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {

    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'data_orm',
    entities: [
        "dist/**/*.entity{.ts,.js}"
        // 'node_modules/nestjs-admin/**/*.entity.js',
        // "entity/*.js"
    ],
    // "migrationsTableName": "custom_migration_table",
    // "migrations": ["migration/*.js"],
    // "cli": {
    //     "migrationsDir": "migration"
    // },
    synchronize: true,


}