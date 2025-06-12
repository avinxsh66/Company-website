import { Module } from '@nestjs/common';
   import { AppController } from './app.controller';
   import { AppService } from './app.service';
   import { TypeOrmModule } from '@nestjs/typeorm';
   import { User } from '@entities/User';
   import { UserModule } from './user/user.module';

   @Module({
     imports: [
       TypeOrmModule.forRoot({
         type: 'mysql',
         host: 'localhost',
         port: 3306,
         username: 'root', // Update to your MySQL username (e.g., 'root')
         password: '1234', // Update to your MySQL password (e.g., '' if no password)
         database: 'db', // Updated to match the database name in the error
         entities: [User],
         synchronize: true,
       }),
       UserModule,
     ],
     controllers: [AppController],
     providers: [AppService],
   })
   export class AppModule {}