import { IsEmail } from 'class-validator';

export class PasswordResetAccountDto {
  @IsEmail()
  email: string;
}
