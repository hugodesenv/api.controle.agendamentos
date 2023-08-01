import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { DatabaseModule } from './dabatase/database.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [CustomerModule, DatabaseModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
