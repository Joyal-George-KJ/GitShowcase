import { Account, Client, Databases } from "node-appwrite";

export const client = new Client()

    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT_ID!)
    .setKey(process.env.APPWRITE_API_KEY!); // Required for server SDK

export const databases = new Databases(client);

export const account = new Account(client);
