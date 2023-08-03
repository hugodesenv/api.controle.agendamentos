import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import knexConfig from './knexfile';

@Module({
  imports: [
    KnexModule.forRoot({
      config: knexConfig,
    }),
  ],
})
export class DatabaseModule {}
