import React from "react";
import { Button } from "react-bootstrap";
import { store } from 'react-notifications-component';
import 'animate.css/animate.css'
import API from "../utils/api"
;
function SaveButton({result}) {

    const handleSave = event => {
        event.preventDefault();
                if (result.id) {
                    API.saveBook({
                        id:   result.id,  
                        title: result.volumeInfo.title,
                        authors: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.previewLink
                    })
                    .then(res => 
                        handleSavedNotification()
                        ).catch(err => console.log(err))
                } 
            }

        const handleSavedNotification = () => {
            store.addNotification({
                title: "New Book Added",
                message: result.volumeInfo.title + " has been saved to your library",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 2000,
                    pauseOnHover: true,
                    onScreen: true,
                    click: true,
                    touch: true
                }
            });
        }

    return (
        <>
            <Button type="button" className="btn btn-primary ml-2" style={{height: "40px"}} onClick={handleSave}>Save</Button>
        </>
    )
}

export default SaveButton