import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './features/customer/customer.module';
import { DatabaseModule } from './shared/dabatase/database.module';
import { AccountModule } from './features/account/account.module';
import { CompanyModule } from './features/company/company.module';
import { ServiceModule } from './features/service/service.module';
import { ScheduleModule } from './features/schedule/schedule.module';

@Module({
  imports: [
    CustomerModule,
    DatabaseModule,
    AccountModule,
    CompanyModule,
    ServiceModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
