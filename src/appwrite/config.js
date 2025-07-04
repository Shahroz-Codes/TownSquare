import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query, Permission, Role } from "appwrite";
import { ROLES } from '../utils/roles.js'; // Ensure you have this constant defined

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

    //Events Service
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


    async createEvent({ title, description, location, date, status, imageFile }) {
        try {
            // Upload image first
            const uploadedFile = await this.bucket.createFile(
                conf.bucketid,
                ID.unique(),
                imageFile
            );

            const imageId = uploadedFile?.$id;

            // Create event with uploaded image ID
            return await this.databases.createDocument(
                conf.databaseid,
                conf.eventsCollectionId,
                ID.unique(),
                {
                    title,
                    description,
                    location,
                    date,
                    status,
                    image: imageId,
                },
                [
                    Permission.read(Role.any()),
                    Permission.write(Role.user(ROLES.ADMIN)),
                ]
            );
        } catch (error) {
            console.error("Appwrite :: createEvent ::", error);
            throw error;
        }
    }
    getImageUrl(fileId) {
        return this.bucket.getFileView(conf.bucketid, fileId).toString();
    }
    //Volunteer Service

    async createVolunteerNeed({ title, description, location, contact, createdat, createdby, status }) {
        try {
            return await this.databases.createDocument(
                conf.databaseid,
                conf.volunteerCollectionId,
                ID.unique(),
                {
                    title,
                    description,
                    location,
                    contact,
                    createdat,
                    createdby,
                    status,
                },
                [
                    Permission.read(Role.any()), // anyone can read
                    Permission.write(Role.user(createdby)) // only creator can edit
                ]
            );
        } catch (error) {
            console.error("Appwrite :: createVolunteerNeed ::", error);
            throw error;
        }
    }

    async getVolunteerNeeds() {
        try {
            const response = await this.databases.listDocuments(
                conf.databaseid,
                conf.volunteerCollectionId,
            );
            return response.documents;
        } catch (error) {
            console.error("Appwrite :: getVolunteerNeeds ::", error);
            return [];
        }
    }

    async deleteVolunteerNeed(documentId, createdby) {
        try {
            await this.databases.deleteDocument(
                conf.databaseid,
                conf.volunteerCollectionId,
                documentId,
                [
                    Permission.read(Role.any()), // anyone can read
                    Permission.write(Role.user(createdby)) // only creator can edit
                ]
            );
            return true;
        } catch (error) {
            console.error("Appwrite :: deleteVolunteerNeed ::", error);
            return false;
        }
    }

    //Feedback Service
    async createFeedback({ email, message }) {
        try {
            return await this.databases.createDocument(
                conf.databaseid,
                conf.feedbackCollectionId,
                ID.unique(),
                {
                    email,
                    message,
                    createdat: new Date().toISOString(),
                    status: "active"
                },
                [
                    Permission.read(Role.any()),
                    Permission.write(Role.any())
                ]
            );
        } catch (error) {
            console.error("Appwrite :: createFeedback ::", error);
            throw error;
        }
    }
    async getFeedbacks() {
        try {
            const response = await this.databases.listDocuments(
                conf.databaseid,
                conf.feedbackCollectionId,
                [Query.equal("status", "active")]
            );
            return response.documents;
        } catch (error) {
            console.error("Appwrite :: getFeedbacks ::", error);
            return [];
        }
    }

    // Analytics Service
    async getAnalyticsCounts() {
        try {
            const [feedbacksRes, eventsRes, volunteerRes] = await Promise.all([
                this.databases.listDocuments(conf.databaseid, conf.feedbackCollectionId),
                this.databases.listDocuments(conf.databaseid, conf.eventsCollectionId),
                this.databases.listDocuments(conf.databaseid, conf.volunteerCollectionId),
            ]);

            return {
                feedbacks: feedbacksRes.total,
                events: eventsRes.total,
                volunteerPosts: volunteerRes.total,
            };
        } catch (error) {
            console.error("Appwrite :: getAnalyticsCounts ::", error);
            return {
                feedbacks: 0,
                events: 0,
                volunteerPosts: 0,
            };
        }
    }


}


const service = new Service()
export default service