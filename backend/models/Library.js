import { SQL_CONFIG } from '../config/sql.config.js'
import mysql from 'mysql2'


export class Library {

  connection;

  constructor() {

    let connection = mysql.createConnection({
      host: SQL_CONFIG.SQL_HOST,
      user: SQL_CONFIG.SQL_USER,
      password: SQL_CONFIG.SQL_PASSWORD,
      database:SQL_CONFIG.SQL_DB,
    });

    connection.connect(error => {
      if (error) throw error;
      console.log("Successfully connected to the database.");
    });

    this.connection = connection.promise();
  }

  close = () => {
    this.connection.end();
  }


  listAll = async () => {
    const [results, fields] = await this.connection.query("SELECT * FROM books");
    return results;
  }

  create = async (newBook) => {

    const { title, author, year } = newBook;

    try {
      const [rows] = await  this.connection.query('SELECT * FROM books');
      const newId = rows[rows.length - 1].id + 1;

      const [results, fields] = await this.connection.query(
        "INSERT INTO books (id, title, author, year) VALUES (?, ?, ?, ?);", 
        [newId, title, author, year]
      );

      return results.affectedRows;

    }
    catch (error) {
      return error;
    }

  };

  update = async (updatedBook) => {

    const { id, title, author, year } = updatedBook;

    try {
      
      const [results] = await this.connection.query(
        "UPDATE books SET id = ?, title = ?, author = ?, year = ? WHERE id = ?",
        [id, title, author, year, id]
      );

      if(results.affectedRows <= 0) throw new Error("Id not found"); 
      return results.affectedRows;

    } catch (error) {
      throw new Error(error.message); 
    }

  }

  delete = async (id) => {
    
    try {

      const [results, fields] = await this.connection.query('DELETE FROM books WHERE id = ?', id);

      if(results.affectedRows <= 0) throw new Error("Id not found"); 
      return results.affectedRows;
      
    } catch (error) {
      throw new Error(error.message); 
    }

  }
  
}