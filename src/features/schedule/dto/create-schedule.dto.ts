import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateScheduleServiceDto } from 'src/features/schedule_service/dto/create-schedule-service.dto';

export class CreateScheduleDto {
  @IsNumber()
  fk_account: number;

  @IsNumber()
  fk_customer: number;

  @IsDateString()
  schedule_date: Date;

  Isso aqui está completamente errado.
  Pensar numa forma generica pro NestJs, mantendo as mesmas propriedades
  quando for inclusão/edição, porque as vezes eu posso alterar, mas incluindo vários itens

  @IsNotEmpty() 
  services: CreateScheduleServiceDto[];
}
