import { Account, Client, Databases, Storage } from 'appwrite';

export const PROJECT_ID = '664db6d60022f3ee1a9e';
export const DATABASE_ID = '664dc07600112a1a26dc';
export const COLLECTION_ID_MESSAGES = '664dc0a3001c2a92c3c1';
export const IMAGES_ID = '664dd65c003d4717ca1f';
export const IMAGE_GET = '664eefc300285f10342f'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('664db6d60022f3ee1a9e')
    .setEndpointRealtime('wss://cloud.appwrite.io/v1/realtime');

export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);

export default client;
