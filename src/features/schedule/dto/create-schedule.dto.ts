import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateScheduleServiceDto } from 'src/features/schedule_service/dto/create-schedule-service.dto';

export class CreateScheduleDto {
  @IsNumber()
  fk_account: number;

  @IsNumber()
  fk_customer: number;

  @IsDateString()
  schedule_date: Date;

  Isso aqui est� completamente errado.
  Pensar numa forma generica pro NestJs, mantendo as mesmas propriedades
  quando for inclus�o/edi��o, porque as vezes eu posso alterar, mas incluindo v�rios itens

  @IsNotEmpty() 
  services: CreateScheduleServiceDto[];
}
