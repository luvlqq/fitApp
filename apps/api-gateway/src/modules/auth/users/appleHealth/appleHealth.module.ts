import { Module } from '@nestjs/common';
import { AppleHealthGatewayController } from './appleHealth.controller';
import { AppleHealthGatewayService } from './appleHealth.service';
import { RmqModule } from '@app/common/rabbit/rabbit.module';

@Module({
  imports: [RmqModule.register({ name: 'AUTH' })],
  controllers: [AppleHealthGatewayController],
  providers: [AppleHealthGatewayService],
})
export class AppleHealthGatewayModule {}
