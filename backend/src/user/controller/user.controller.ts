import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
     import { UserService } from '../services/user.service';

     @Controller('contact')
     export class UserController {
         constructor(private readonly userService: UserService) {}

         @Post()
         async submitContactForm(
             @Body() body: { name: string; email: string; message: string; demo: boolean },
         ) {
             console.log('Received contact form submission:', body); // Add this log
             const { name, email, message, demo } = body;
             if (!name || !email || !message) {
                 throw new HttpException('Name, email, and message are required', HttpStatus.BAD_REQUEST);
             }
             try {
                 const user = await this.userService.submitContactForm({ name, email, message, demo: !!demo });
                 return { message: 'Contact form submitted successfully', user };
             } catch (error) {
                 throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
             }
         }
     }