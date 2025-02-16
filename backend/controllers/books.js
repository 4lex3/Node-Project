import { Library } from '../models/Library.js'


export const getBooks = (async (req, res) => {
    
    try{

        let library = new Library({});

        let books = await library.listAll();

        res.json(books);
        library.close();

    }
    catch(error){
        console.error(error);
        res.json("Error getting books...");
    }

})

export const createBook = (async (req, res) => {

    try{

        let library = new Library({});

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: parseInt(req.body.year)
        };

        let created = await library.create(newBook);

    
        if(created){
            console.log("Product created successfully")
            res.json("Product created successfully")
        }
        else{
            console.log("Error creating new book...")
            res.json("Error creating new book...");
        }
        library.close()
    }
    catch{
        console.log("Error creating new book...")
        res.json("Error creating new book...");
    }
    
})

export const updateBook = ( async (req, res) => {

    const updatedBook = {
        id: parseInt(req.body.id),
        title: req.body.title,
        author: req.body.author,
        year: parseInt(req.body.year),
    }


    try {
        
        const library = new Library();
        const affectedRows = await library.update(updatedBook);

        if(affectedRows > 0) return res.status(200).json({message: "Updated book"});

    } catch (error) {
        return res.status(500).json({Message: error.message});
    }

})

export const deleteBook = ( async (req, res) => {

    const id = parseInt(req.body.id);


    try {
        
        const library = new Library();
        const affectedRows = await library.delete(id);

        if(affectedRows > 0) return res.status(200).json({message: "Deleted book!"});

    } catch (error) {
        return res.status(500).json({Message: error.message});
    }

})
