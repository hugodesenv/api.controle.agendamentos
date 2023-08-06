import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './features/customer/customer.module';
import { DatabaseModule } from './shared/dabatase/database.module';
import { AccountModule } from './features/account/account.module';
import { CompanyModule } from './features/company/company.module';
import { ScheduleModule } from './features/schedule/schedule.module';
import { ServiceModule } from './features/service/service.module';

@Module({
  imports: [
    CustomerModule,
    DatabaseModule,
    AccountModule,
    CompanyModule,
    ScheduleModule,
    ServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
