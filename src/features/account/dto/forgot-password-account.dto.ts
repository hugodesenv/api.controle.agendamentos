import { IsEmail } from 'class-validator';

export class ForgotPasswordAccountDto {
  @IsEmail()
  email: string;
}
