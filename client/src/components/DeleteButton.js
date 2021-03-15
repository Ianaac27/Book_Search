import React from "react";
import { Button } from "react-bootstrap";
import API from "../utils/API";
function DeleteButton() {

    // const handleDelete = event => {
    //     event.preventDefault();

    //     if (result.id) {
    //         API.saveBook({
    //         title: result.volumeInfo.title,
    //         authors: result.volumeInfo.authors,
    //         description: result.volumeInfo.description,
    //         image: result.volumeInfo.imageLinks.thumbnail,
    //         link: result.volumeInfo.previewLink
    //         })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    //     }
    //     };

    return (
        <Button type="button" className="btn btn-primary ml-2">X</Button>
    )
}

export default DeleteButton