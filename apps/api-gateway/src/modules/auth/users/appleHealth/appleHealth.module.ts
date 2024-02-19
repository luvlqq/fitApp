import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { Module } from '@nestjs/common';

import { AppleHealthGatewayController } from './appleHealth.controller';
import { AppleHealthGatewayService } from './appleHealth.service';

@Module({
  imports: [RmqModule.register({ name: 'AUTH' })],
  controllers: [AppleHealthGatewayController],
  providers: [AppleHealthGatewayService],
})
export class AppleHealthGatewayModule {}
