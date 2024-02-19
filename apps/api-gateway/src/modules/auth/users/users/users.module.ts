import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { Module } from '@nestjs/common';

import { UsersGatewayController } from './users.controller';
import { UsersGatewayService } from './users.service';

@Module({
  imports: [RmqModule.register({ name: 'AUTH' })],
  controllers: [UsersGatewayController],
  providers: [UsersGatewayService],
})
export class UsersGatewayModule {}
