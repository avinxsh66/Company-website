import { Injectable } from '@nestjs/common';
     import { InjectRepository } from '@nestjs/typeorm';
     import { Repository } from 'typeorm';
     import { User } from '@entities/User';
     import { EmailService } from '../services/email.service';

     @Injectable()
     export class UserService {
         constructor(
             @InjectRepository(User)
             private userRepository: Repository<User>,
             private emailService: EmailService,
         ) {}

         async submitContactForm(data: { name: string; email: string; message: string; demo: boolean }): Promise<User> {
             const user = this.userRepository.create({
                 name: data.name,
                 email: data.email,
                 message: data.message,
                 demo: data.demo,
             });
             const savedUser = await this.userRepository.save(user);
             await this.emailService.sendContactFormEmail(data); // Email sending won't crash the request
             return savedUser;
         }
     }