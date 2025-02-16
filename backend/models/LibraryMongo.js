import { MONGO_CONFIG } from '../config/mongo.config.js'
import { MongoClient } from 'mongodb'


export class LibraryMongo {

  createConnection = async () => {

    try {

      this.client = new MongoClient(MONGO_CONFIG.MONGO_URL); 
      this.connection = await this.client.connect(); 
      this.db = this.connection.db( MONGO_CONFIG.MONGO_DB_NAME); 

      this.collection = this.db.collection(MONGO_CONFIG.MONGO_COLLECTION); 

    } catch (error) {
      console.error("Error al conectar a mongodb:", error);
    }
  
  }


  listAll = async () => {

    try {
      
      await this.createConnection();
      return await this.collection.find().toArray();

    } catch (error) {
      console.error(error);      
    }

  }



  create = async (newBook) => {

    const { title, author, year } = newBook;

    try {

      await this.createConnection();

      const booksQuantity = await this.listAll();

      const results = await this.collection.insertOne({
        id: booksQuantity.length + 1,
        title: title,
        author: author,
        year: year
      });

      return results; 
    }
    catch (error) {
      console.log(error)
      return error;
    }

  };


  update = async (updatedBook) => {

    const { id, title, author, year } = updatedBook;

    try {
      
      await this.createConnection();
      const results = await this.collection.updateOne({id: id}, {
        $set: {
          title: title,
          author: author,
          year: year,
        }
      });

      if(results.modifiedCount <= 0) throw new Error("Not modified, not found!")
      return results.modifiedCount;

    } catch (error) {
      throw new Error(error.message); 
    }

  }


  delete = async (id) => {
    try {
      await this.createConnection();
      const result = await this.collection.deleteOne({ id: id });

      if (result.deletedCount <= 0) throw new Error("Not deleted, not found!");
      return result.deletedCount;

    } catch (error) {
      throw new Error(error.message);
    }
  }

}
