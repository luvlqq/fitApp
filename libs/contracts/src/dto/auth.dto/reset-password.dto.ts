import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({ description: 'User email', nullable: false })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'User reset code', nullable: false })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ description: 'User new password', nullable: false })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class SendResetCodeDto {
  @ApiProperty({ description: 'User email', nullable: false })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
