import axios from "axios";
import React, {useRef, useState} from "react";
import { Card, Form, Button } from "react-bootstrap";
import API from "../utils/API";

function Search () {

    // const [books, setBooks] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyBxQCKW6sj6XpOO98O3jUevXEKeJ5VyDFY");

    const bookInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q="+bookInput.current.value+"&key="+apiKey+"&maxResults=10")
            .then(({data}) => {
                console.log(data);
            });

            // API.getBooks("https://www.googleapis.com/books/v1/volumes?q="+bookInput.current.value+"&key="+apiKey+"maxResults=10")
            // .then(({data}) => {
            //     console.log(data);
            // });
    }

    return (

        <Card>
            <Card.Body>
                <h2 className="fs-2" >Book Search</h2>
                <Form onSubmit={handleSubmit}> 
                    <Form.Group>
                        <Form.Label>Book Name</Form.Label>
                            <Form.Control ref={bookInput} type="text" placeholder="Search Book" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        
)
}

export default Search;
