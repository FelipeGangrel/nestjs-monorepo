import { Connection } from 'typeorm';
import { CONNECTION, CLIENTS_REPOSITORY } from '@app/constants';
import { Client } from './client.entity';

export const clientsProviders = [
  {
    provide: CLIENTS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Client),
    inject: [CONNECTION],
  },
];
