import React, {useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import API from "../utils/API";

function Saved () {

    const [savedBook, setSavedBook] = useState([]);

    console.log(savedBook);

    useEffect(() => {
        loadBooks()
      }, [])

    const loadBooks = (req,res) => {
        API.getBooks(res)
            .then(res => {
                setSavedBook(res.data);
                console.log(res.data);      
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="bg-dark rounded p-4 mt-4">
        <h2 className="fs-2 text-white">Saved Books</h2>
        <div >
        {savedBook.length > 0 ? savedBook.map(savedBook => (
            <Card className="my-4" style={{ height: "300px"}}>
                <Card.Body className="d-flex justify-content-center align-item-center p-4">
                    <img src={savedBook.image} alt={savedBook.title}/>
                    <div className="card-body ml-3 d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row">
                            <a type="button" className="btn btn-primary" target="_blank" href={savedBook.link}>View</a>
                            <DeleteButton />
                        </div>
                        <h3 className="title card-title mt-2" style={{fontSize: "25px"}}>{savedBook.title}</h3>
                        <h4 className="authors" style={{fontSize: "15px"}}>{savedBook.authors}</h4>
                        <p style={{ overflowY: "scroll", height: "200px"}} id="savedBookDescription" className="info">{savedBook.description}</p>
                    </div>
                </Card.Body>
            </Card>
   )
   ): <h3 className="fs-1 text-white text-center mt-5">You have no saved books</h3>}; 
        </div>
    </div>
)
}

export default Saved;