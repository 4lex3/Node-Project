import { LibraryMongo } from '../models/LibraryMongo.js'


const MongoGetBooks = (async (req, res) => {
    
    try {

        let library = new LibraryMongo();
        let books = await library.listAll();

        return res.status(200).json(books);
    }
    catch(err){
        console.log(err)
        res.status(500).json("Error getting books...");
    }

})

const MongoCreateBook = (async (req, res) => {

    const { title, author, year } = req.body;

    if(!title || !author || !year) return res.status(400).json({Message: "The id and the rest of the body are necessary"});

    try{

        let library = new LibraryMongo();

        const newBook = {
            title: title,
            author: author,
            year: parseInt(year)
        };

        let created = await library.create(newBook);
        return res.status(201).json({insertedId: created.insertedId})

    }
    catch(error){
        console.log(error)
        res.json("Error creating new book...");
    }
    
})

const MongoUpdateBook = ( async (req, res) => {


    const { id, title, author, year } =  req.body;

     
    try {
        
        if(!id || !title || !author || !year) return res.status(400).json({Message: "The id is required"});

        const updatedBook = {
            id: parseInt(id),
            title: title,
            author: author,
            year: parseInt(year),
        }

        const library = new LibraryMongo();
        const affectedRows = await library.update(updatedBook);

        if(affectedRows > 0) return res.status(200).json({message: "Updated book"});

    } catch (error) {
        return res.status(500).json({Message: error.message});
    }

})


const MongoDeleteBook = ( async (req, res) => {

    const id = parseInt(req.body.id);

    try {
        
        const library = new LibraryMongo();
        const deletedCount = await library.delete(id);

        return res.status(200).json({message: "Deleted book!"});

    } catch (error) {
        return res.status(500).json({Message: error.message});
    }

})
