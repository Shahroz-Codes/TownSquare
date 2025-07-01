import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query, Permission, Role } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.projectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getEvents() {
        try {
            const response = await this.databases.listDocuments(
                conf.databaseid,
                conf.eventsCollectionId,  // Replace with your actual collection ID
                [Query.equal("status", "active")]
            );
            return response.documents;
        } catch (error) {
            console.error("Appwrite :: getEvents ::", error);
            return [];
        }
    }


    async createEvent({ title, description, date, userId }) {
        try {
            return await this.databases.createDocument(
                conf.databaseid,
                conf.eventsCollectionId,
                ID.unique(),
                {
                    title,
                    description,
                    date,
                    status: "active",
                    userId: userId || null,
                },
                [
                    Permission.read(Role.any()),
                    Permission.write(Role.user(ADMIN_ID)), // Only admin can modify
                ]
            );
        } catch (error) {
            console.error("Appwrite :: createEvent ::", error);
            throw error;
        }
    }



}


const service = new Service()
export default service