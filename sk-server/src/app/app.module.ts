import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { jwtConstants } from '../constants';
import Controllers from '../controller';
import { Guards } from '../guards';
import { AllSchemas } from '../schemas';
import { Services } from '../services';
import { Strategies } from '../strategies';
import { AppLoggerMiddleware } from 'src/middleware/logger';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE),
    MongooseModule.forFeature(AllSchemas),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '360d' },
    }),
  ],
  controllers: [AppController, ...Controllers],
  providers: [AppService, ...Services, ...Guards, ...Strategies],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
