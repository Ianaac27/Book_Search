import React from "react";

function BookResults ({result}) {
    return (
        <div className="bg-dark rounded p-4 mt-4">
            <h2 className="fs-2 text-white">Results</h2>
            <div >
            {result.map(result => (
                <div className="d-flex justify-content-center align-item-center p-4">
                    <div className="card d-flex flex-row">
                        <img src={result.volumeInfo.imageLinks&&result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title}/>
                        <div className="card-body ml-3 d-flex flex-column justify-content-center">
                            <div className="d-flex flex-row">
                                <a type="button" className="btn btn-primary" target="_blank" href={result.volumeInfo.previewLink}>View</a>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                            <h3 className="name card-title">{result.volumeInfo.title}</h3>
                            <p id="bookDescription" className="info">{result.volumeInfo.description}</p>
                        </div>
                    </div>
                </div>
       )
       )}; 
            </div>
        </div>
)
}

export default BookResults;