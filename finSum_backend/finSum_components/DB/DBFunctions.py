from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

class MongoDB:
    def __init__(self, database_name: str):
        """
        Initialize the MongoDBHandler with a connection URI and database name.
        """
        self.uri = "mongodb://localhost:27017"
        self.database_name = database_name
        self.client = None
        self.db = None

    def connect(self):
        """
        Connect to the MongoDB server and select the database.
        """
        try:
            self.client = MongoClient(self.uri)
            self.db = self.client[self.database_name]
            print(f"Connected to MongoDB database: {self.database_name}")
        except ConnectionFailure as e:
            print(f"Failed to connect to MongoDB: {e}")
            raise

    def insert_document(self, collection_name: str, document: dict):
        """
        Insert a single document into a collection.
        """
        collection = self.db[collection_name]
        result = collection.insert_one(document)
        print(f"Document inserted with ID: {result.inserted_id}")
        return result.inserted_id

    def find_documents(self, collection_name: str, query: dict = None):
        """
        Find documents in a collection based on a query.
        """
        collection = self.db[collection_name]
        query = query or {}
        documents = collection.find(query)
        return list(documents)
   
    def update_document(self, collection_name: str, query: dict, update: dict, upsert: bool = False):
        """
        Update a single document in a collection. Optionally create a new document if no match is found.
        """
        collection = self.db[collection_name]
        result = collection.update_one(query, {"$set": update}, upsert=upsert)
        print(f"Matched {result.matched_count} document(s), Modified {result.modified_count} document(s)")
        return result.modified_count

    def delete_document(self, collection_name: str, query: dict):
        """
        Delete a single document from a collection.
        """
        collection = self.db[collection_name]
        result = collection.delete_one(query)
        print(f"Deleted {result.deleted_count} document(s)")
        return result.deleted_count
    
    def insert_multiple_documents(self, collection_name: str, documents: list):
        """
        Insert multiple documents into a collection.
        """
        if not isinstance(documents, list):
            raise ValueError("Documents must be provided as a list of dictionaries.")
        
        collection = self.db[collection_name]
        result = collection.insert_many(documents)
        print(f"Inserted {len(result.inserted_ids)} documents.")
        return result.inserted_ids

    def close_connection(self):
        """
        Close the connection to the MongoDB server.
        """
        if self.client:
            self.client.close()
            print("MongoDB connection closed.")