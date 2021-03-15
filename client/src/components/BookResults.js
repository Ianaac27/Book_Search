import React from "react";
import { Card } from "react-bootstrap";
import SaveButton from "./SaveButton";

function BookResults ({result}) {
    return (
        <div className="bg-dark rounded p-4 mt-4">
            <h2 className="fs-2 text-white">Results</h2>
            <div >
            {result.length > 0 ? result.map(result => (
                <Card className="my-4" style={{ height: "300px"}}>
                    <Card.Body className="d-flex justify-content-center align-item-center p-4">
                        <img src={result.volumeInfo.imageLinks&&result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title}/>
                        <div className="card-body ml-3 d-flex flex-column justify-content-center">
                            <div className="d-flex flex-row">
                                <a type="button" className="btn btn-primary" target="_blank" href={result.volumeInfo.previewLink}>View</a>
                                <SaveButton result={result}/>
                            </div>
                            <h3 className="title card-title mt-2" style={{fontSize: "25px"}}>{result.volumeInfo.title}</h3>
                            <h4 className="authors" style={{fontSize: "15px"}}>{result.volumeInfo.authors}</h4>
                            <p style={{ overflowY: "scroll", height: "200px"}} id="bookDescription" className="info">{result.volumeInfo.description}</p>
                        </div>
                    </Card.Body>
                </Card>
       )
       ): <h3 className="fs-1 text-white text-center mt-5">You have no results</h3>}; 
            </div>
        </div>
)
}

export default BookResults;