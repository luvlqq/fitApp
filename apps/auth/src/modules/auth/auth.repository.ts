import { AuthDto } from '@app/contracts/dto/auth.dto';
import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async foundUser(dto: AuthDto): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email: dto.email },
    });
  }

  public async foundUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email: email } });
  }

  public async putResetTokenToUser(email: string, code: string) {
    return this.prisma.user.update({
      where: { email: email },
      data: { resetCode: code },
    });
  }

  public async updateUserField<T extends keyof User>(
    email: string,
    field: T,
    value: User[T],
  ) {
    return this.prisma.user.update({
      where: { email: email },
      data: { [field]: value },
    });
  }

  public async compareResetCode(email: string) {
    return this.prisma.user.findUnique({
      where: { email: email },
      select: { resetCode: true },
    });
  }

  public async createNewUser(
    dto: AuthDto,
    hashedPassword: string,
  ): Promise<User> {
    return this.prisma.user.create({
      data: { email: dto.email, password: hashedPassword },
    });
  }

  public async signOut(userId: number): Promise<boolean> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashRt: {
          not: null,
        },
      },
      data: {
        hashRt: null,
      },
    });
    return true;
  }

  public async foundUserById(userId: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: +userId } });
  }

  public async updateRtHash(userId: number, hash: string): Promise<User> {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashRt: hash,
      },
    });
  }
}
