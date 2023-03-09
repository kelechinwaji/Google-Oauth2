import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/TypeOrm/entities/user';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './utils/GoogleStratrgy';
import { SessionSerializer } from './utils/serializer';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers: [
      GoogleStrategy,
      SessionSerializer,
         {
            provide: "AUTH_SERVICE",
            useClass: AuthService,
         },
        ],
})
export class AuthModule {}
