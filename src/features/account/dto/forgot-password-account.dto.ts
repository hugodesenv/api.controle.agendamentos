import { IsEmail, IsNotEmpty } from 'class-validator';

export class ForgotPasswordAccountDto {
  @IsNotEmpty()
  username: string;
}
