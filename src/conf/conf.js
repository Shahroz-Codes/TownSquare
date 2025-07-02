const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    eventsCollectionId: String(import.meta.env.VITE_APPWRITE_EVENTS_COLLECTION_ID),
    volunteerCollectionId: String(import.meta.env.VITE_APPWRITE_VOLUNTEER_COLLECTION_ID),
    bucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;