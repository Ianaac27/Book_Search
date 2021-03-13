import React, {useRef} from "react";
import { Card, Form, Button } from "react-bootstrap";
import API from "../utils/api";

function Search () {

    const bookInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        API.getBooks( bookInput.current.value )
            .then(({data}) => {
                console.log(data);
            });
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
