import { LONG, MEDIUM, SHORT } from '@app/common/configuration';
import configuration from '@app/common/configuration/configuration';
import { LoggingInterceptor } from '@app/common/interceptors/logging.interceptor';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

import { AuthGatewayModule } from './modules/auth/auth/auth.module';
import { AtGuard } from './modules/auth/auth/guards';
import { AppleHealthGatewayModule } from './modules/auth/users/appleHealth/appleHealth.module';
import { NotificationsModule } from './modules/auth/users/notifications/notifications.module';
import { UsersGatewayModule } from './modules/auth/users/users/users.module';
import { MealsGatewayModule } from './modules/meals/meals/meals.module';
import { NutritionGatewayModule } from './modules/meals/nutrionPlans/nutrion.module';
import { ExerciseGatewayModule } from './modules/workouts/exercises/exercise.module';
import { UploadVideoGatewayModule } from './modules/workouts/upload_video/uploadvideo.module';
import { WorkoutsGatewayModule } from './modules/workouts/workouts/workouts.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([SHORT, MEDIUM, LONG]),
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
    PrometheusModule.register(),
    AuthGatewayModule,
    UsersGatewayModule,
    AppleHealthGatewayModule,
    UploadVideoGatewayModule,
    MealsGatewayModule,
    WorkoutsGatewayModule,
    ExerciseGatewayModule,
    NutritionGatewayModule,
    NotificationsModule,
  ],
  providers: [
    AtGuard,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class ApiGatewayModule {}
