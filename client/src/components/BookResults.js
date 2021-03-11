import React from "react";
import NoResults from "./NoResults";
import Results from "./Results";

function BookResults () {
    return (
        <div className="bg-dark rounded p-4 mt-4">
            <h2 className="fs-2 text-white">Book Results</h2>
            <div >
                <NoResults />
                {/* dynamic result compnents, router or conditional, refer to employee directly for user cards */}
                <Results />
            </div>
        </div>
)
}

export default BookResults;