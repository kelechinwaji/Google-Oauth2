import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './TypeOrm/entities/user';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: 'grit',
    entities: [User],
    synchronize: true,
  }),
  PassportModule.register({session: true}),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
