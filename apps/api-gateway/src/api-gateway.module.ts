import configuration from '@app/common/configuration/configuration';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { AuthGatewayModule } from './modules/auth/auth/auth.module';
import { AtGuard } from './modules/auth/auth/guards';
import { AppleHealthGatewayModule } from './modules/auth/users/appleHealth/appleHealth.module';
import { UsersGatewayModule } from './modules/auth/users/users/users.module';
import { MealsGatewayModule } from './modules/meals/meals/meals.module';
import { ExerciseGatewayModule } from './modules/workouts/exercises/exercise.module';
import { UploadVideoGatewayModule } from './modules/workouts/upload_video/uploadvideo.module';
import { WorkoutsGatewayModule } from './modules/workouts/workouts/workouts.module';

// const DEFAULT_ADMIN = {
//   email: 'admin@example.com',
//   password: 'password',
// };

// const authenticate = async (email: string, password: string) => {
//   if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
//     return Promise.resolve(DEFAULT_ADMIN);
//   }
//   return null;
// };

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [
        {
          name: 'short',
          ttl: config.get<number>('SHORT_THROTTLE_TTL'),
          limit: config.get<number>('SHORT_THROTTLE_LIMIT'),
        },
        {
          name: 'medium',
          ttl: config.get<number>('MEDIUM_THROTTLE_TTL'),
          limit: config.get<number>('MEDIUM_THROTTLE_LIMIT'),
        },
        {
          name: 'long',
          ttl: config.get<number>('LONG_THROTTLE_TTL'),
          limit: config.get<number>('LONG_THROTTLE_LIMIT'),
        },
      ],
    }),
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
    // import('@adminjs/nestjs').then(({ AdminModule }) =>
    //   AdminModule.createAdminAsync({
    //     useFactory: () => ({
    //       adminJsOptions: {
    //         rootPath: '/admin',
    //         resources: [],
    //       },
    //       auth: {
    //         authenticate,
    //         cookieName: 'adminjs',
    //         cookiePassword: 'secret',
    //       },
    //       sessionOptions: {
    //         resave: true,
    //         saveUninitialized: true,
    //         secret: 'secret',
    //       },
    //     }),
    //   }),
    // ),
    AuthGatewayModule,
    UsersGatewayModule,
    AppleHealthGatewayModule,
    UploadVideoGatewayModule,
    MealsGatewayModule,
    WorkoutsGatewayModule,
    ExerciseGatewayModule,
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
  ],
})
export class ApiGatewayModule {}
