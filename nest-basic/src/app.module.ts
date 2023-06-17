import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsController } from './artists/artists.controller';
import { ArtistsService } from './artists/artists.service';
import { ArtistsModule } from './artists/artists.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'john.db.elephantsql.com',
    //   port: 3306,
    //   username: 'qbunhtyx',
    //   password: 'sksr6TcW1q8wUuhcE6DFKfVknbr_5nrf',
    //   database: 'MMProject',
    //   entities: [ArtistsModule],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController, ArtistsController],
  providers: [AppService, ArtistsService],
})
export class AppModule {}
