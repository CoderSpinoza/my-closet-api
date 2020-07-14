import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { Cloth } from '../entity/Cloth';
import { Brand } from '../entity/Brand';
import { Type } from '../entity/Type';
import { Color } from '../entity/Color';
import { Material } from '../entity/Material';
import { ClothMaterial } from '../entity/ClothMaterial';
import { ClothMonth } from '../entity/ClothMonth';
import { entities } from '../entity';

require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('NODE_ENV', true);
    return mode === 'production';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      url: this.getValue('DATABASE_URL'),
      entities,
      synchronize: true,
      // entities: ['**/entity/*.{ts,js}'],
      // migrationsTableName: 'migration',

      // migrations: ['src/migration/*.ts'],

      // cli: {
      //   migrationsDir: 'src/migration',
      // },
      ssl: this.isProduction(),
    };
  }
  public getTestTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      url: this.getValue('TEST_DATABASE_URL'),
      entities,
      synchronize: true,
      // entities: ['**/entity/*.{ts,js}'],
      // migrationsTableName: 'migration',

      // migrations: ['src/migration/*.ts'],

      // cli: {
      //   migrationsDir: 'src/migration',
      // },
      ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'DATABASE_URL',
]);

export { configService };
