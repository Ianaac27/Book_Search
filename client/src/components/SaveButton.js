import React from "react";
import { Button } from "react-bootstrap";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notification-component';
import "animate.css-react";
import 'react-notifications-component/dist/theme.css'
import API from "../utils/API";
import { TRUE } from "node-sass";
function SaveButton({result}) {

    const handleSave = event => {
        event.preventDefault();

        if (result.id) {
            API.saveBook({
            title: result.volumeInfo.title,
            authors: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.previewLink
            })
            .then(res => 
                handleNotification()
                ).catch(err => console.log(err));
        }
        };

        const handleNotification = () => {
            store.addNotification({
                title: "New Book Added",
                message: result.volumeInfo.title + "has been saved to your library",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 6000,
                    // onScreen: true,
                    pauseOnHover: true,
                    click: true,
                    touch: true
                }
            });
        }

    return (
        <>
            <ReactNotification isMobile={TRUE} breakpoint={768} />
            <Button type="button" className="btn btn-primary ml-2" onClick={handleSave}>Save</Button>
        </>
    )
}

export default SaveButton