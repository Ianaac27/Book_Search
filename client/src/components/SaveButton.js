import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { store } from 'react-notifications-component';
import 'animate.css/animate.css'
import API from "../utils/API"
;
function SaveButton({result}) {

    const [savedBook, setSavedBook] = useState([]);
    const idArray = [];
    // const emptyArray = [];

    useEffect(() => {
        loadBooks()
      }, [])

      //Code for potential duplicating, currently unable to get it to work.
    // const handleIdArray = () => {
    //     for (var i = 0; i < savedBook.length; i++) {  
    //         idArray.push(savedBook[i].id)
    //         }
    //         console.log(idArray)
    //         console.log(savedBook)
    // }

    // const clearIdArray = () => {
    //     idArray.length = 0;
    //     console.log(idArray);
    // }

    const loadBooks = (req,res) => {
        API.getBooks(res)
            .then(res => {
                setSavedBook(res.data);
                console.log(res.data);      
            })
            .catch(err => console.log(err));
    }

    const handleSave = event => {
        event.preventDefault();
        // handleIdArray()

        // conditional for empty array
        // if (savedBook == emptyArray) {
        //     API.saveBook({
        //         id:   result.id,  
        //         title: result.volumeInfo.title,
        //         authors: result.volumeInfo.authors,
        //         description: result.volumeInfo.description,
        //         image: result.volumeInfo.imageLinks.thumbnail,
        //         link: result.volumeInfo.previewLink
        //     })
        //     .then(res => 
        //     handleSavedNotification(),
        //     loadBooks()
        //     ).catch(err => console.log(err))
        // } else {
        
            // for (var i = 0; i < idArray.length; i++) {
            //         console.log(idArray[i]);
            //         console.log(result.id);
            //         (idArray[i] !== result.id)
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
                        // clearIdArray(),
                        // loadBooks()
                        ).catch(err => console.log(err))
                } 
                // else {
                //     handleErrorNotification()
                //     return;
                // }
            }
        // }
    // }

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

        // const handleErrorNotification = () => {
        //     store.addNotification({
        //         title: "ERROR",
        //         message: result.volumeInfo.title + " has already been saved",
        //         type: "danger",
        //         insert: "top",
        //         container: "top-right",
        //         animationIn: ["animate__animated", "animate__fadeIn"],
        //         animationOut: ["animate__animated", "animate__fadeOut"],
        //         dismiss: {
        //             duration: 2000,
        //             onScreen: true,
        //             pauseOnHover: true,
        //             click: true,
        //             touch: true
        //         }
        //     });
        // }

    return (
        <>
            <Button type="button" className="btn btn-primary ml-2" style={{height: "40px"}} onClick={handleSave}>Save</Button>
        </>
    )
}

export default SaveButton