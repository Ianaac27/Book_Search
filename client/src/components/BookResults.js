import React from "react";
import { Card } from "react-bootstrap";
import "../styles/card.css";
import SaveButton from "./SaveButton";

function BookResults ({result}) {
    return (
        <div className="bg-dark rounded p-4 mt-4">
            <h2 className="fs-2 text-white">Results</h2>
            <div >
            {result.length > 0 ? result.map(result => (
                <Card className="book-card my-4 py-4" style={{ height: "260px"}} >
                    <Card.Body className="book-info d-flex justify-content-center align-item-center">
                        <div className="card-body ml-3 d-flex flex-column justify-content-center">
                            <div className="d-flex flex-wrap-reverse justify-content-between">
                                <div className="d-flex flex-column">
                                    <h3 className="title card-title" style={{fontSize: "20px"}}>{result.volumeInfo.title}</h3>
                                    <h4 className="authors" style={{fontSize: "15px"}}>{result.volumeInfo.authors}</h4>
                                </div>
                                <div className="d-flex flex-row">
                                    <a type="button" className="btn btn-primary" style={{height: "40px"}} target="_blank" href={result.volumeInfo.previewLink}>View</a>
                                    <SaveButton result={result}/>
                                </div>
                            </div>
                            <div className="d-flex flex-row h-100 h-100">
                                <img src={result.volumeInfo.imageLinks&&result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title}/>
                                <p style={{ overflowY: "scroll"}} id="bookDescription" className="info ml-2">{result.volumeInfo.description}</p>
                            </div>
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