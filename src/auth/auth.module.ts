import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/GoogleStratrgy';

@Module({
    controllers: [AuthController],
    providers: [GoogleStrategy]
})
export class AuthModule {}
