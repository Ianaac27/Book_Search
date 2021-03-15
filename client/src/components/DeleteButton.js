import React from "react";
import { Button } from "react-bootstrap";
import { store } from 'react-notifications-component';
import 'animate.css/animate.css'
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
                handleDeleteNotification();   
            })
            .catch(err => console.log(err));
    }

    const handleDeleteNotification = () => {
        store.addNotification({
            title: "Book Deleted",
            message: savedBook.title + " has been deleted from your library",
            type: "warning",
            insert: "top",
            container: "top-full",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                // onScreen: true,
                pauseOnHover: true,
                click: true,
                touch: true
            }
        });
    }
    return (
        <Button type="button" className="btn btn-primary ml-2" onClick={() => deleteBook(savedBook._id)}>X</Button>
    )
}

export default DeleteButton