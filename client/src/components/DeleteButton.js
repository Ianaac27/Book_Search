import React from "react";
import { Button } from "react-bootstrap";
import API from "../utils/API";

function DeleteButton({savedBook, setSavedBook}) {

    const deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => loadBooks()
            )};

    const loadBooks = (req,res) => {
        API.getBooks(res)
            .then(res => {
                setSavedBook(res.data);
                console.log(res.data);      
            })
            .catch(err => console.log(err));
    }
    return (
        <Button type="button" className="btn btn-primary ml-2" onClick={() => deleteBook(savedBook._id)}>X</Button>
    )
}

export default DeleteButton