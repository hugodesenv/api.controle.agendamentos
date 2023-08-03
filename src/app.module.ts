import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './features/customer/customer.module';
import { DatabaseModule } from './shared/dabatase/database.module';
import { AccountModule } from './features/account/account.module';

@Module({
  imports: [CustomerModule, DatabaseModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
