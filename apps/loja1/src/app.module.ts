import { Module } from '@nestjs/common';
import { DatabaseSettingsInterface, DatabaseModule } from '@app/database';
import { AuthModule, JwtSettingsInterface } from '@app/auth';
import { User } from '@app/users';
import { Client, ClientsModule } from '@app/clients';
import { Administrator, AdministratorsModule } from '@app/administrators';

const dbSettings: DatabaseSettingsInterface = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'loja1',
  entities: [User, Client, Administrator],
};

const jwtSettings: JwtSettingsInterface = {
  secret: 'olhaomacaco',
  signOptions: {
    expiresIn: '60s',
  },
};

@Module({
  imports: [
    DatabaseModule.forRoot(dbSettings),
    AuthModule.forRoot(jwtSettings),
    ClientsModule,
    AdministratorsModule,
  ],
})
export class AppModule {}
