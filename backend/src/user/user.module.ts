import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './services/user.service';
import { EmailService } from './services/email.service';
import { UserController } from './controller/user.controller';
import { User } from '../typeorm/entities/User';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }), // Load .env globally
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [UserController],
    providers: [UserService, EmailService],
})
export class UserModule {}