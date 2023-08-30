import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './features/account/account.module';
import { CompanyModule } from './features/company/company.module';
import { CustomerModule } from './features/customer/customer.module';
import { DatabaseModule } from './features/dabatase/database.module';
import { EmailModule } from './features/email/email.module';
import { EmployeeModule } from './features/employee/employee.module';
import { ItemModule } from './features/item/item.module';
import { ScheduleModule } from './features/schedule/schedule.module';

@Module({
  imports: [
    CustomerModule,
    DatabaseModule,
    AccountModule,
    CompanyModule,
    ScheduleModule,
    EmailModule,
    ConfigModule.forRoot() /** env */,
    ItemModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
